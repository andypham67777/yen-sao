
//show hinh anh gg map
function openGoogleMap() {
    const address = encodeURIComponent("39A, đường Quang Trung, khu phố 9, thị trấn Phước Vĩnh, huyện Phú Giáo, tỉnh Bình Dương");
    const googleMapUrl = `https://www.google.com/maps?q=${address}`;
    window.open(googleMapUrl, "_blank");
}

//show content
function toggleContent(element) {
    const content = element.closest('.flex').querySelector('.content');
    const icon = element.querySelector('.icon-svg');

    content.classList.toggle('hidden');

    icon.classList.toggle('rotate-180');
}

//show hinh anh
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src; // Set image source
    modal.classList.remove('hidden'); // Show modal
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden'); // Hide modal
}