document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg',
        'image11.jpg',
        'image12.jpg',
        'image13.jpg',
        'image14.jpg',
        'image15.jpg',
        'image16.jpg',
        'image17.jpg',
        'image18.jpg',
        'image19.jpg',
        'image20.jpg',
        'image21.jpg',
        'image22.jpg',
        'image23.jpg',
        'image24.jpg',
        'image25.jpg',
        'image26.jpg',
        'image27.jpg',
        'image28.jpg',
        'image29.jpg',
        'image30.jpg',
        'image31.jpg',
        'image32.jpg',
        'image33.jpg',
        'image34.jpg',
        'image35.jpg',
        'image36.jpg',
        'image37.jpg',
        'image38.jpg',
        'image39.jpg',
        'image40.jpg',
        'image41.jpg',
        'image42.jpg',
        'image43.jpg',
        'image44.jpg',
        'image45.jpg',
        'image46.jpg',
        'image47.jpg',
        'image48.jpg',
        'image49.jpg',
    ];

    let currentIndex = 0;
    const displayedImage = document.getElementById('displayed-image');

    const showImage = (index) => {
        displayedImage.src = images[index];
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    const handleGesture = () => {
        if (touchEndX < touchStartX) {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
        if (touchEndX > touchStartX) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
    };

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleGesture();
    });
});
