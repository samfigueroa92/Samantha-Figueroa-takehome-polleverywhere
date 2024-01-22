const convertDate = (string) => {
    const date = new Date(string);
    const newDate = date.toLocaleDateString();
    const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return newDate + " " + time;
  };


module.exports = {
    convertDate
}