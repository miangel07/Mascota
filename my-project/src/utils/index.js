const setCookie = (name, value, duration) => {
    document.cookie =  `${name}=${value}; max-age=${duration} path=/;`;
}

const getCookie = (name) => {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1];
}

const removeCookie = (name) => {
    document.cookie = `${name}=; max-age=0; path=/;`;
};


export { setCookie, getCookie, removeCookie };
/* La función setCookie se utiliza para crear o actualizar una cookie en el navegador.
name: El nombre de la cookie.
value: El valor de la cookie.
duration: El tiempo de vida de la cookie en segundos. */

/* ${name}=${value}: Define el nombre y el valor de la cookie.
max-age=${duration}: Establece el tiempo de vida de la cookie en segundos.
path=/: Define el ámbito de la cookie en todo el sitio web. */