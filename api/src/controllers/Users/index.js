const { UsersModel, Roles, ProductsModel } = require('../../models/ModelsDB.js');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const listUsers = async () => {
    const users = await UsersModel.find();
    return users;
}

const addUser = async (uid, email, roles) => {
    const result = await UsersModel.findById({ _id: uid });
    if (result) {
        return result;
    }
    const user = new UsersModel({ _id: uid, email: email });
    if (roles) {
        const rolesFound = await Roles.find({ name: { $in: roles } })
        user.roles = rolesFound.map(e => e.name);
    }
    else {
        const role = await Roles.findOne({ name: 'user' });
        user.roles = role.name;
    }
    await user.save();
    return user;
}

const findUser = async (id) => {
    if (!id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(id);
    if (!user) {
        return `The user with an id ${id} was not found in the database`
    }
    return user;
}

const getUserDashboard = async (_id) => {
    if (!_id) throw new Error(`It needs an id property`);
    console.log({ _id })

    const user = await UsersModel.aggregate([
        { $match: { _id: _id } },
        {
            $lookup: {
                from: "products",
                localField: "favourites",
                foreignField: "_id",
                as: "productsFavourites"
            }
        },
        {
            $lookup: {
                from: "roles",
                localField: "roles",
                foreignField: "_id",
                as: "roles"
            }
        },
        {
            $lookup: {
                from: "reviews",
                localField: "reviews",
                foreignField: "_id",
                as: "reviews"
            }
        },
        { $unwind: "$roles" }
    ])
    if (!user) {
        return `The user with an id ${_id} was not found in the database`
    }
    return user
}

const deleteUser = async (id) => {
    if (!id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(id);
    if (!user) {
        return `The user with an id ${id} was not found in the database`;
    }
    await UsersModel.deleteOne({ _id: id });
    return `The user with an id ${id} was successfully deleted`;
}

const modifyUser = async (id, name, username, email, password, phone, address, city, image, admin) => {
    let user = await UsersModel.findById(id);
    if (!user) {
        throw new Error(`The user with an id ${id} was not found in the database`);
    }

    let parameters = {}

    if (name && name.length) parameters.name = name;
    if (username && username.length) parameters.username = username;
    if (email && email.length) parameters.email = email;
    // if(password.length) parameters.password = password;
    if (phone && phone.length) parameters.phone = phone;
    if (address && address.length) parameters.address = address;
    if (city && city.length) parameters.city = city;
    // if(image.length) parameters.image = image;
    console.log(parameters)
    await UsersModel.updateOne({ _id: id }, { $set: parameters });
    // return `The user with an id ${id} was successfully modified`;
    const updateUser = await getUserDashboard(id)
    return updateUser
}

const addFavoriteProducts = async (_id, favorite) => {
    if (!favorite) throw new Error('Falta el dato favorite')
    if (!_id) throw new Error('Falta el dato _id')
    await UsersModel.updateOne({ _id }, { $addToSet: { favourites: favorite } })
    const user = await UsersModel.findById(_id);
    return user
}

const deleteFavoriteProducts = async (_id, favorite) => {
    if (!favorite) throw new Error('Falta el dato favorite')
    if (!_id) throw new Error('Falta el dato _id')
    await UsersModel.updateOne({ _id }, { $pull: { favourites: favorite } })
    const user = await UsersModel.findById(_id);
    return user
}

const postFavourites = async (id, favourite) => {
    const user = await UsersModel.findById({ _id: id });
    if (!user) {
        throw new Error(`User was not found in the database`);
    }
    const product = await ProductsModel.findOne({ _id: favourite });
    user.favourites = [product.id];
    await user.save();
    console.log(user);
}

const postUsers = async (array) => {
    array.map((e) => {
        UsersModel.create({
            name: e.name,
            username: e.username,
            email: e.email,
            password: e.password,
            phone: e.phone,
            address: e.address,
            city: e.city,
            image: e.image,
            admin: e.admin
        });
        jwt.sign({ id: e._id }, SECRET, {
            expiresIn: 86400
        });
    });
    Promise.all(array);
    return `Users added successfully`;
}


module.exports = {
    listUsers,
    addUser,
    findUser,
    deleteUser,
    modifyUser,
    postUsers,
    postFavourites,
    getUserDashboard,
    addFavoriteProducts,
    deleteFavoriteProducts
}