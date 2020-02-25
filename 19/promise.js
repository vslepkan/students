const applyForVisa = () => createPromise();
const bookHotel = () => console.log("# Book a hotel");
const buyTickets = () => console.log("# Buy a ticket");
const cancelVacation = () => console.log("# Cancel vacation");
const drinkСhampagne = () => console.log("# Drink a glass of champagne");
const shareOnFacebook = () => console.log("# Share a post");

// Promise status:
// - pending
// - fulfilled => resolve
// - rejected => reject

// Отправить документы на получение визы => Promise(pending)
// Получить визу => resolve(fulfilled)
// Купить билеты на самолет
// Забронировать отель
// Выпить шампанское
// Получить отказ => reject(rejected)
// Опубликуем пост в соц сеть

applyForVisa()
  .then(buyTickets)
  .then(bookHotel)
  .catch(cancelVacation)
  .then(drinkСhampagne)
  .finally(shareOnFacebook);

function createPromise() {
  return new Promise((resolve, reject) => {
    console.log("# Send documents for visa");
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("# Visa received")
        : reject("# Visa declined");
    }, 2000);
  });
}
