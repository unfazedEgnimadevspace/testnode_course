//info about current user
const user = os.userInfo();
console.log(user);

//method that returns the system uptime in seconds;
const data = os.type();
console.log(data);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem(),
};
console.log(currentOs);
