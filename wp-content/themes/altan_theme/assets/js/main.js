document.addEventListener('DOMContentLoaded', function() {
    let getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.scrollY,
            right: box.right + window.scrollX,
            bottom: box.bottom + window.scrollY,
            left: box.left + window.scrollX,
            height: box.height,
        };
    },
    isOnScreen = (elem) => {
        let coefficient;
        window.innerWidth <= 768 ? coefficient = .75 : coefficient = .9;
        return window.scrollY > (getCoords(elem).top - window.innerHeight / coefficient);
    },
    isMobile = () => {
        return window.outerWidth <= 767;
    },
    isExist = (selector) => {
        return document.querySelector(selector);
    },
    playAnimations = () => {
        let toAnimate = document.querySelectorAll('.animated');
        if (toAnimate) {
            for (let i of toAnimate) {
                if (isOnScreen(i)) {
                    i.style.transform = 'translate(0, 0)';
                    i.style.opacity = '1';
                }
            }
            window.addEventListener('scroll', function () {
                for (let i of toAnimate) {
                    if (isOnScreen(i)) {
                        i.style.transform = 'translateX(0)';
                        i.style.opacity = '1';
                    }
                }
            });
        }
    }
    playAnimationsAdvantages = () => {
        let toAnimate = document.querySelectorAll('.animated-advantages');
        if (toAnimate) {
            for (let i of toAnimate) {
                if ( isOnScreen( i ) ) {
                    i.classList.add( 'advantages-animate' );
                }
            }
            window.addEventListener('scroll', function () {
                for (let i of toAnimate) {
                    if ( isOnScreen( i ) ) {
                        i.classList.add( 'advantages-animate' );
                    }
                }
            });
        }
    }
    playAnimationsDelivery = () => {
        let toAnimate = document.querySelectorAll('.animated-delivery');
        if (toAnimate) {
            for (let i of toAnimate) {
                if ( isOnScreen( i ) ) {
                    i.classList.add( 'delivery-animate' );
                }
            }
            window.addEventListener('scroll', function () {
                for (let i of toAnimate) {
                    if ( isOnScreen( i ) ) {
                        i.classList.add( 'delivery-animate' );
                    }
                }
            });
        }
    }
    playAnimationsLeftBanner = () => {
        let toAnimate = document.querySelectorAll('.animated-leftBanner');
        if (toAnimate) {
            for (let i of toAnimate) {
                if ( isOnScreen( i ) ) {
                    i.classList.add( 'leftBanner-animate' );
                }
            }
            window.addEventListener('scroll', function () {
                for (let i of toAnimate) {
                    if ( isOnScreen( i ) ) {
                        i.classList.add( 'leftBanner-animate' );
                    }
                }
            });
        }
    }
    playAnimationsRightBanner = () => {
        let toAnimate = document.querySelectorAll('.animated-rightBanner');
        if (toAnimate) {
            for (let i of toAnimate) {
                if ( isOnScreen( i ) ) {
                    i.classList.add( 'rightBanner-animate' );
                }
            }
            window.addEventListener('scroll', function () {
                for (let i of toAnimate) {
                    if ( isOnScreen( i ) ) {
                        i.classList.add( 'rightBanner-animate' );
                    }
                }
            });
        }
    }

    //МЕНЮ ХЭДЕРА НА ЭКРАНАХ МЕНЬШЕ 1280px
    if (window.outerWidth <= 1024) {
        let hamburgerIcon = document.querySelector('#hamburger-icon'),
            mobileHeader = document.querySelector('#mobile-header'),
            mobileMenu = document.querySelector('#mobile-menu'),
            backgroundMenu = document.querySelector('#background-menu'),
            mobileAnchors = document.querySelectorAll('#mobileAnchor'),
            mapAnchor = document.querySelector('#mapAnchor'),
            prevScrollpos = window.scrollY;

        //АКТИВАЦИЯ МЕНЮ
        hamburgerIcon.onclick = function (e) {
            e.preventDefault();
            hamburgerIcon.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            backgroundMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            document.documentElement.classList.toggle('no-scroll');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.style.top = window.scrollY + mobileHeader.clientHeight + "px";
            } else {
                mobileMenu.style.top = -1000 + "px";
            }
        };

        //НАЖАТИЕ НА БЭКГРАУНД АКТИВНОГО МЕНЮ
        backgroundMenu.onclick = function (e) {
            e.preventDefault();
            hamburgerIcon.classList.remove('active');
            mobileMenu.classList.remove('active');
            backgroundMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.style.top = window.scrollY + mobileHeader.clientHeight + "px";
            } else {
                mobileMenu.style.top = -1000 + "px";
            }
        }

        //ФУНКЦИОНАЛ ХЭДЕРА И МЕНЮ ПРИ СКРОЛЛЕ
        window.addEventListener('scroll', function () {
            let currentScrollPos = window.scrollY;

            if (window.scrollY <= 2) {
                mobileHeader.classList.remove('active');
            } else if (prevScrollpos > currentScrollPos) {
                mobileHeader.classList.add('active');
                mobileHeader.classList.remove('hide');
            } else {
                mobileHeader.classList.add('hide');
                mobileHeader.classList.remove('active');
            }
            prevScrollpos = currentScrollPos;
        });

        mobileAnchors.forEach(function(mobileAnchor) {
            mobileAnchor.addEventListener('click', function() {
                hamburgerIcon.classList.remove('active');
                mobileMenu.classList.remove('active');
                backgroundMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
                document.documentElement.classList.remove('no-scroll');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.style.top = window.scrollY + mobileHeader.clientHeight + "px";
                } else {
                    mobileMenu.style.top = -1000 + "px";
                }
            });
        });

        mapAnchor.onclick = function () {
            hamburgerIcon.classList.remove('active');
            mobileMenu.classList.remove('active');
            backgroundMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.style.top = window.scrollY + mobileHeader.clientHeight + "px";
            } else {
                mobileMenu.style.top = -1000 + "px";
            }
        }
    }

    if (isExist('.home-page')) {

        $(document).ready(function() {
            $('.open_image-popup').magnificPopup({
                type: 'image',
                fixedContentPos: true,
                overflowY: 'auto',
            });
        });

        //ЯНДЕКС КАРТА
        ymaps.ready(init);

        function init() {
            if (window.outerWidth <= 834) {
                var myMap = new ymaps.Map('map', {
                    center: [48.492714, 135.101004],
                    zoom: 17,
                })
            } else if (window.outerWidth <= 1280) {
                var myMap = new ymaps.Map('map', {
                    center: [48.492714, 135.104004],
                    zoom: 17,
                })
            } else {
                var myMap = new ymaps.Map('map', {
                    center: [48.492714, 135.101004],
                    zoom: 17,
                })
            }
            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 32
            });
            myMap.geoObjects.add(objectManager);
            objectManager.objects.options.set('preset', 'islands#redDotIcon');
            myMap.geoObjects.add(objectManager);
            objectManager.add({
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id": 1,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [48.492614, 135.101004]
                        },
                        "properties": {
                            "iconCaption": 'Алтан Шина',
                            "balloonContent": 'Алтан Шина',
                        }
                    }
                ]
            });

            //Клик по метке в карте
            objectManager.objects.events.add('click', function (e) {
                var objectId = e.get('objectId');
                viewObject(objectId);
            });
            //Клик в списке
            [].forEach.call(document.querySelectorAll('[data-objectId]'), function (el) {
                el.addEventListener('click', function () {
                    var objectId = el.getAttribute("data-objectId");
                    viewObject(objectId);
                });
            });

            // Что происходит при выборе метки или варианта из списка
            function viewObject(objectId) {
                // Удаляем со всего списка класс active затем добавляем к выбранному
                for (var object of document.querySelectorAll('[data-objectId]')) {
                    object.classList.remove('active');
                }
                document.querySelector('[data-objectId="' + objectId + '"]').classList.add('active');
                // Выделяем все метки в синий, затем выбранную в красную
                objectManager.objects.each(function (item) {
                    objectManager.objects.setObjectOptions(item.id, {
                        preset: 'islands#blueIcon'
                    });
                });
                objectManager.objects.setObjectOptions(objectId, {
                    preset: 'islands#redDotIcon'
                });
                // Центрирование по метке
                myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 15, {
                    checkZoomRange: true
                });
            }

            if (window.outerWidth > 767) {
                var productsSwiper = new Swiper(".productsSwiper", {
                    slidesPerView: 'auto',
                });
            }
        }
    }

    window.addEventListener('load', function () {

        playAnimations();
        playAnimationsAdvantages();
        playAnimationsDelivery();
        playAnimationsLeftBanner();
        playAnimationsRightBanner();

        if (window.outerWidth <= 767) {
            const swiperWrapper = document.querySelector('.hitsHeight');
            const cards = document.querySelectorAll('.open_image-popup');
            const cardHeight = cards[0].offsetHeight;
            const maxHeight = (cardHeight * 2) + 15;
            swiperWrapper.style.maxHeight = maxHeight + 'px';

            let moreButton = document.querySelector('#moreButton');
            let isExpanded = false;

            if (maxHeight > swiperWrapper.offsetHeight) {
                moreButton.style.display = 'none';
            } else {
                moreButton.style.display = 'flex';
            }

            moreButton.onclick = function (e) {
                e.preventDefault();
                moreButton.classList.toggle('active');
                isExpanded = !isExpanded;

                if (isExpanded) {
                    swiperWrapper.style.maxHeight = swiperWrapper.scrollHeight + 'px';
                } else {
                    swiperWrapper.style.maxHeight = maxHeight + 'px';
                }
            };
        }

        //ПОПАП ФОРМЫ
        $('.open-popup__order').magnificPopup({
            type: 'inline',
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                },
                beforeClose: function() {
                    var form = this.content.find('form');
                    var nameInputLabel = form.find('#label-name');
                    var phoneInputLabel = form.find('#label-phone');
                    var mailInputLabel = form.find('#label-mail');
                    var messageInputLabel = form.find('#label-message');
                    if (form.length) {
                        form[0].reset();
                        nameInputLabel.removeClass('active');
                        phoneInputLabel.removeClass('active');
                        mailInputLabel.removeClass('active');
                        messageInputLabel.removeClass('active');
                    }
                },
            },
            fixedContentPos: true,
            overflowY: 'auto',
            midClick: true,
            items: {
                src: '.popup-order',
            }
        });

        //ПОПАП ЗВОНКА
        $('.open-popup__reverse').magnificPopup({
            type: 'inline',
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                },
                beforeClose: function() {
                    var form = this.content.find('form');
                    var nameInputLabel = form.find('#label-name2');
                    var phoneInputLabel = form.find('#label-phone2');
                    var mailInputLabel = form.find('#label-mail2');
                    if (form.length) {
                        form[0].reset();
                        nameInputLabel.removeClass('active');
                        phoneInputLabel.removeClass('active');
                        mailInputLabel.removeClass('active');
                    }
                },
            },
            fixedContentPos: true,
            overflowY: 'auto',
            midClick: true,
            items: {
                src: '.popup-reverse',
            }
        });

        //ПОПАП ПРИ ОТКРЫТИИ САЙТА
        $(document).ready(function() {
            setTimeout(function() {
                $.magnificPopup.instance.open({
                    items: {
                        src: '.popup__price'
                    },
                    closeOnBgClick: false,
                });
            }, 4000);
        });

        const nameInput = document.getElementById('your-name'),
            nameInputLabel = document.getElementById('label-name'),
            nameInput2 = document.getElementById('your-name2'),
            nameInputLabel2 = document.getElementById('label-name2'),
            phoneInput = document.getElementById('your-phone'),
            phoneInputLabel = document.getElementById('label-phone'),
            phoneInput2 = document.getElementById('your-phone2'),
            phoneInputLabel2 = document.getElementById('label-phone2'),
            mailInput = document.getElementById('your-mail'),
            mailInputLabel = document.getElementById('label-mail'),
            mailInput2 = document.getElementById('your-mail2'),
            mailInputLabel2 = document.getElementById('label-mail2'),
            mailInput3 = document.getElementById('your-mail3'),
            mailInputLabel3 = document.getElementById('label-mail3'),
            messageInput = document.getElementById('your-message'),
            messageInputLabel = document.getElementById('label-message');

        nameInput.addEventListener('focus', () => {
            nameInputLabel.classList.add('active');
        });

        nameInput.addEventListener('blur', () => {
            if (!nameInput.value.trim()) {
                nameInputLabel.classList.remove('active');
            }
        });

        if (nameInput.value.trim()) {
            nameInputLabel.classList.add('active');
        }

        nameInput2.addEventListener('focus', () => {
            nameInputLabel2.classList.add('active');
        });

        nameInput2.addEventListener('blur', () => {
            if (!nameInput2.value.trim()) {
                nameInputLabel2.classList.remove('active');
            }
        });

        if (nameInput2.value.trim()) {
            nameInputLabel2.classList.add('active');
        }

        phoneInput.addEventListener('focus', () => {
            phoneInputLabel.classList.add('active');
        });

        phoneInput.addEventListener('blur', () => {
            if (!phoneInput.value.trim()) {
                phoneInputLabel.classList.remove('active');
            }
        });

        if (phoneInput.value.trim()) {
            phoneInputLabel.classList.add('active');
        }

        phoneInput2.addEventListener('focus', () => {
            phoneInputLabel2.classList.add('active');
        });

        phoneInput2.addEventListener('blur', () => {
            if (!phoneInput2.value.trim()) {
                phoneInputLabel2.classList.remove('active');
            }
        });

        if (phoneInput2.value.trim()) {
            phoneInputLabel2.classList.add('active');
        }

        mailInput.addEventListener('focus', () => {
            mailInputLabel.classList.add('active');
        });

        mailInput.addEventListener('blur', () => {
            if (!mailInput.value.trim()) {
                mailInputLabel.classList.remove('active');
            }
        });

        if (mailInput.value.trim()) {
            mailInputLabel.classList.add('active');
        }

        mailInput2.addEventListener('focus', () => {
            mailInputLabel2.classList.add('active');
        });

        mailInput2.addEventListener('blur', () => {
            if (!mailInput2.value.trim()) {
                mailInputLabel2.classList.remove('active');
            }
        });

        if (mailInput2.value.trim()) {
            mailInputLabel2.classList.add('active');
        }

        mailInput3.addEventListener('focus', () => {
            mailInputLabel3.classList.add('active');
        });

        mailInput3.addEventListener('blur', () => {
            if (!mailInput3.value.trim()) {
                mailInputLabel3.classList.remove('active');
            }
        });

        if (mailInput3.value.trim()) {
            mailInputLabel3.classList.add('active');
        }

        messageInput.addEventListener('focus', () => {
            messageInputLabel.classList.add('active');
        });

        messageInput.addEventListener('blur', () => {
            if (!messageInput.value.trim()) {
                messageInputLabel.classList.remove('active');
            }
        });

        if (messageInput.value.trim()) {
            messageInputLabel.classList.add('active');
        }

        document.querySelectorAll('input[name=your-name]').forEach(function(input) {
            input.addEventListener('input', function() {
                this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
            });
        });

        document.querySelectorAll('input[name=your-phone]').forEach(function(input) {
            input.addEventListener('input', function() {
                this.value = this.value.replace(/[^\d]/g, '');
            });
        });

        document.querySelectorAll('input[name=your-mail]').forEach(function(input) {
            input.addEventListener('input', function() {
                this.value = this.value.replace(/[^a-zA-Z0-9@.]/g, '');
            });
        });

        //ПОПАП ПОДТВЕРЖДЕНИЯ ИЛИ ОШИБКИ
        let wpcf7Order = document.querySelectorAll('.order__form .wpcf7');
        for (let form of wpcf7Order) {
            form.addEventListener('wpcf7mailsent', function () {
                $.magnificPopup.close();
                $.magnificPopup.open({
                    type: 'inline',
                    items: {
                        src: '.popup__sent-order',
                    },
                    fixedContentPos: true,
                    overflowY: 'auto',
                });
            });
        }

        //ПОПАП ПОДТВЕРЖДЕНИЯ ИЛИ ОШИБКИ
        let wpcf7Reserve = document.querySelectorAll('.reverse__form .wpcf7');
        for (let form of wpcf7Reserve) {
            form.addEventListener('wpcf7mailsent', function () {
                $.magnificPopup.close();
                $.magnificPopup.open({
                    type: 'inline',
                    items: {
                        src: '.popup__sent-reserve',
                    },
                    fixedContentPos: true,
                    overflowY: 'auto',
                });
            });
        }

        //ПОПАП ПОДТВЕРЖДЕНИЯ ИЛИ ОШИБКИ
        let wpcf7Price = document.querySelectorAll('.price__form .wpcf7');
        for (let form of wpcf7Price) {
            form.addEventListener('wpcf7mailsent', function () {
                $.magnificPopup.close();
                $.magnificPopup.open({
                    type: 'inline',
                    items: {
                        src: '.popup__sent-price',
                    },
                    fixedContentPos: true,
                    overflowY: 'auto',
                });
            });
        }
    });
});