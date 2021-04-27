const userRepository = require('./../../domain/repositories/user.repository')

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
}

async function createUser(userData){
  return await userRepository.createUser(userData);
}

async function getUsers(){
  return await userRepository.getUsers();
}

async function getUser(userId){
  return await userRepository.getUser(userId);
}

async function deleteUser(id){
  try {
    return await userRepository.deleteUser(id);
  } catch (error) {
      throw error;
  }
}

async function updateUser(userId, updatedUser){
  try {
    return await userRepository.updateUser(userId, updatedUser);
  } catch (error) {
      throw error;
  }
}
