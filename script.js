const wonderArr = [
    {
        name: 'Chichen Itza',
        description: 'A large pre-Columbian archaeological site built by the Maya civilization located in Mexico.',
        imgSrc: 'chichenItza.webp'
    },
    {
        name: 'Colosseum',
        description: 'An ancient amphitheater in Rome, Italy, and one of the greatest works of Roman architecture and engineering.',
        imgSrc: 'colosseo.jpg'
    },
    {
        name: 'Great Wall of China',
        description: 'A series of fortifications made of stone, brick, tamped earth, wood, and other materials, built along the northern borders of China to protect against invasions.',
        imgSrc: 'Great-Wall-of-China.webp'
    },
    {
        name: 'Machu Picchu',
        description: 'A 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge above the Sacred Valley.',
        imgSrc: 'MachuPicchu.jpg'
    },
    {
        name: 'Petra',
        description: 'A historical and archaeological city in southern Jordan famous for its rock-cut architecture and water conduit system.',
        imgSrc: 'Petra.webp'
    },
    {
        name: 'Statue of Liberty',
        description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States.',
        imgSrc: 'Statue.jpg'
    },
    {
        name: 'Taj Mahal',
        description: 'An ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.',
        imgSrc: 'TajMahal.jpg'
    }
];

let currentImgIndex = 0;

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const sliderPrevImage = document.querySelector(".sliderPrevImage");
const sliderComingImage = document.querySelector(".sliderComingImage");
const sliderImage = document.querySelector(".sliderImage");
const infoHd = document.querySelector(".infoHd");
const infopara = document.querySelector(".infopara");


const SlideImage = (direction) => {
    const currentImage = wonderArr[currentImgIndex];
    if(direction === 'next'){
        sliderComingImage.style.transition = '0.4s';
        sliderComingImage.style.right = 0;
    } else {
        sliderPrevImage.style.transition = '0.4s';
        sliderPrevImage.style.left = 0;
    }

    setTimeout(() => {
        if(currentImgIndex === 0){
            sliderPrevImage.src = `./img/${wonderArr[wonderArr.length-1].imgSrc}`;
        } else {
            sliderPrevImage.src = `./img/${wonderArr[currentImgIndex-1].imgSrc}`;
        }

        if(currentImgIndex === wonderArr.length-1){
            sliderComingImage.src = `./img/${wonderArr[0].imgSrc}`;
        } else {
            sliderComingImage.src = `./img/${wonderArr[currentImgIndex+1].imgSrc}`;
        }

        sliderImage.src = `./img/${currentImage.imgSrc}`;
        infoHd.textContent = currentImage.name;
        infopara.textContent = currentImage.description;
        sliderComingImage.style.transition = 'unset';
        sliderComingImage.style.right = '-100%';
        sliderPrevImage.style.transition = 'unset';
        sliderPrevImage.style.left = '-100%';
    }, 400);
    
};

prevBtn.addEventListener('click', function() {
    if (currentImgIndex > 0) {
        currentImgIndex--;
    } else {
        currentImgIndex = wonderArr.length - 1;
    }
    SlideImage("prev");
});
nextBtn.addEventListener('click', function() {
    if (currentImgIndex < wonderArr.length-1) {
        currentImgIndex++;
    } else {
        currentImgIndex = 0;
    }
    SlideImage("next");
});