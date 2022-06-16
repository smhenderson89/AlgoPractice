const checkObject = {"(":")", "[":"]", "{":"}"};


keys = Object.keys(checkObject);

x = ")"

if (keys.includes(x)) {
    console.log(true);
} else {
    console.log(false);
}