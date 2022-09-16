const { Artist } = require("../db");

const createArtist = async (id, name, birthday, hometown) => {
  try {
    const artistCreate = await Artist.create({
      id,
      name,
      birthday,
      hometown,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createArtist;
