// object destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven"
};
const bandName = band.bandName;
const famousSong = band.famousSong;
console.log(bandName, famousSong);

// using object destructuring

const band1 = {
    bandName1: "led zepplin",
    famousSong1: "stairway to heaven"
};

const { bandName1, famousSong1} = band;
console.log(bandName);

// using new variable declare
const band2 = {
    bandName2: "led zepplin",
    famousSong2: "stairway to heaven",
    year: 1999,
    anotherFamousSong: "Jay Shree Ram"
};

const { bandName2:var1, famousSong2:var2} = band2;
console.log(var2);

const band4 = {
    bandName4: "led zepplin",
    famousSong4: "stairway to heaven",
    years: 1999,
    anotherFamousSongs: "Jay Shree Ram"
};

const {bandName4, famousSong4, ...restProps} = band4;
console.log(band4);