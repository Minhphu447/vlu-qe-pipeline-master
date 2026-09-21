function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    if (username === "") {
        throw new Error("Username không được để trống");
    }

    if (password === "") {
        throw new Error("Password không được để trống");
    }

    if (password !== "123") {
        throw new Error("Mật khẩu không đúng");
    }

    return false;
}

module.exports = login;
