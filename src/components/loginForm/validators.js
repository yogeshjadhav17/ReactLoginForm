export const emailvalidator = email => {
    if(!email){
        return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)){
        return "Incorrect email format";
    }
    return "";
};

export const passwordValidator = password => {
    if(!password){
        return "Password field is required";

    }else if (password.length < 8){
        return "Password should be at least 8 characters long";
    }

    return "";
};

export const confirmPasswordValidator = (confirmPassword, form) => {
    if(!confirmPassword){
        return "Confirm Password is required";
    } else if (confirmPassword < 8) {
        return "Confirm Password must have minimum of 8 characters";
    } else if(confirmPassword !== form.password){
        return "Passwords do not match";
    }

    return "";
};