// Получаем все изображения
const images = document.querySelectorAll('.congrats-image');

// Добавляем анимацию появления через задержку
images.forEach((image, index) => {
    setTimeout(() => {
        image.style.opacity = '1'; // Показываем изображение
        image.style.transform = 'scale(1)'; // Возвращаем оригинальный размер
    }, index * 500); // Задержка между анимациями (500 мс)
});