<footer class="main-footer" id="contacts-anchor">
    <div class="main-footer__body content">
        <div class="body__info animated to-right">
            <p class="info__name">КОНТАКТЫ</p>
            <div class="info__contacts">
                <a class="contacts__body" href="tel:<?php echo '+' . preg_replace('/[^0-9]/', '', get_field('contacts-phone', 'option')); ?>">
                    <div>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
                            <path d="M30.2833 29.0803L27.2787 26.716C26.663 26.2234 25.7765 26.3219 25.2593 26.913C24.7176 27.5287 24.3726 27.9474 24.2495 28.0459C23.3383 28.9571 21.442 27.6272 19.4226 25.6078C17.403 23.5885 16.0979 21.7168 17.0089 20.8055C17.1075 20.7069 17.5261 20.3376 18.1418 19.7957C18.7329 19.2785 18.8315 18.392 18.3389 17.7763L15.9746 14.7717C15.5559 14.2545 14.8417 14.082 14.2506 14.3285C13.4378 14.6732 11.9848 15.88 11.5907 16.2741C9.42363 18.4658 12.1327 23.4406 16.8612 28.1937C21.5896 32.9469 26.5894 35.6562 28.7564 33.4642C29.1505 33.0701 30.3571 31.6171 30.702 30.8044C30.973 30.1887 30.8005 29.499 30.2834 29.0804L30.2833 29.0803Z" fill="#FEDA45"/>
                            <path d="M22.8951 18.5156C22.2549 18.3679 21.6392 18.8603 21.6883 19.5254C21.7129 19.944 22.033 20.2888 22.4271 20.4121C22.9443 20.5352 23.4369 20.8062 23.8308 21.2002C24.2249 21.5943 24.4956 22.0869 24.6189 22.6039C24.7175 23.0226 25.0622 23.3181 25.5056 23.3427C26.1705 23.3919 26.6631 22.7763 26.5154 22.1359C26.343 21.2985 25.8997 20.4858 25.2347 19.8207C24.5698 19.1558 23.757 18.7126 22.8951 18.5155V18.5156Z" fill="#FEDA45"/>
                            <path d="M29.3967 23.638C29.9879 23.6872 30.4803 23.1702 30.4311 22.5791C30.2587 20.6089 29.4213 18.6632 27.9191 17.1609C26.4169 15.6587 24.4713 14.8214 22.5009 14.6489C21.9098 14.5997 21.3926 15.0921 21.442 15.6833C21.4666 16.1511 21.8361 16.5452 22.3287 16.5945C23.8803 16.7176 25.3825 17.3827 26.5399 18.5648C27.7219 19.7468 28.3624 21.2492 28.5101 22.776C28.5101 23.2438 28.9042 23.6133 29.3966 23.6379L29.3967 23.638Z" fill="#FEDA45"/>
                            <path d="M30.5788 14.4763C28.2391 12.1614 25.21 10.93 22.1314 10.8314C21.565 10.8069 21.097 11.2993 21.1464 11.8658C21.171 12.3585 21.5896 12.7525 22.0823 12.7771C24.668 12.8756 27.2294 13.91 29.175 15.88C31.1452 17.8502 32.1795 20.4116 32.2535 22.9727C32.2781 23.4653 32.6476 23.884 33.1647 23.9086C33.7311 23.9577 34.2237 23.4899 34.1991 22.9236C34.1252 19.8452 32.8937 16.8158 30.5788 14.4762L30.5788 14.4763Z" fill="#FEDA45"/>
                        </svg>
                    </div>
                    <p><?php the_field( 'contacts-phone', 'option' ); ?></p>
                </a>
                <div class="contacts__body">
                    <div>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2215 10.4199C20.8824 8.9401 24.1182 8.9401 26.7789 10.4199C26.78 10.4206 26.7809 10.4213 26.782 10.4219C29.1947 11.7638 30.9283 14.0641 31.5549 16.7546C32.1817 19.4456 31.643 22.2763 30.0722 24.5479C27.2817 28.5831 24.3321 32.8494 23.0978 34.6341C22.962 34.8305 22.7388 34.9476 22.5001 34.9476C22.262 34.9476 22.0385 34.8305 21.9029 34.6341C20.6687 32.8494 17.7183 28.5835 14.928 24.5484C13.357 22.2769 12.8185 19.4459 13.4451 16.7546C14.0719 14.0639 15.8055 11.7636 18.218 10.4219C18.2191 10.4213 18.2205 10.4206 18.2216 10.4199H18.2215ZM22.5004 12.9471C25.7085 12.9471 28.3129 15.5548 28.3129 18.7664C28.3129 21.9782 25.7083 24.5856 22.5004 24.5856C19.2922 24.5856 16.688 21.9779 16.688 18.7664C16.688 15.5548 19.2924 12.9471 22.5004 12.9471Z" fill="#FEDA45"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1372 18.7668C26.1372 20.7758 24.5089 22.4043 22.5 22.4043C20.4913 22.4043 18.8628 20.7758 18.8628 18.7668C18.8628 16.7579 20.4913 15.1294 22.5 15.1294C24.5089 15.1294 26.1372 16.7579 26.1372 18.7668" fill="#FEDA45"/>
                        </svg>
                    </div>
                    <p><?php the_field( 'contacts-addres', 'option' ); ?></p>
                </div>
                <a class="contacts__body" href="mailto:<?php the_field( 'contacts-mail', 'option' ); ?>">
                    <div>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
                            <path d="M31.14 13.5H13.86C12.672 13.5 11.7108 14.5125 11.7108 15.75L11.7 29.25C11.7 30.4875 12.672 31.5 13.86 31.5H31.14C32.328 31.5 33.3 30.4875 33.3 29.25V15.75C33.3 14.5125 32.328 13.5 31.14 13.5ZM31.14 18L22.5 23.625L13.86 18V15.75L22.5 21.375L31.14 15.75V18Z" fill="#FEDA45"/>
                        </svg>
                    </div>
                    <p><?php the_field( 'contacts-mail', 'option' ); ?></p>
                </a>
            </div>
            <a class="info__order open-popup__reverse" href="#">
                ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
            </a>
            <div class="info__bottom">
                <p class="bottom__copyright"><?php echo date("Y"); ?> © Алтаншина</p>
                <a class="bottom__privacy" href="/privacy-policy">Пользовательское соглашение</a>
                <p class="bottom__studio">Сайт сделал: <a href="https://01cat.ru">Двоичный кот</a></p>
            </div>
        </div>
        <div class="body__map animated to-left" id="map"></div>
    </div>
</footer>

</body>
<?php wp_footer(); ?>
</html>