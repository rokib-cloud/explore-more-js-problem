const phones = [
    { name: 'samsung', camera: 12, Storage: '32gb', price: 36000, color: 'light-pink' },
    { name: 'walton', camera: 16, Storage: '32gb', price: 16000, color: 'light-pink' },
    { name: 'symphony', camera: 20, Storage: '32gb', price: 18000, color: 'light-pink' },
    { name: 'motorola', camera: 12, Storage: '32gb', price: 26000, color: 'light-pink' },
    { name: 'itel', camera: 18, Storage: '32gb', price: 15000, color: 'light-pink' },
    { name: 'iphone', camera: 40, Storage: '32gb', price: 60000, color: 'light-pink' },
    { name: 'oppo', camera: 32, Storage: '32gb', price: 19000, color: 'light-pink' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
