<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'indiecomp_altshn' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'indiecomp_altshn' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'z6T%7UaY' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'v#H&(CKj?7L:Dxtb[4l*]*0zc0VMq]nEZL^Cm(tW/?cGEch4Ql@F_Ax>H@x_?|9m' );
define( 'SECURE_AUTH_KEY',  '<-,BSKK[cyfh<KG&$5-6OKr{i>Uy8j0u/8x1@MnV70aHs@hEp~1,0w^eavma5D2Y' );
define( 'LOGGED_IN_KEY',    'z*p}|:%{*pQgW+o}.x|~IlE5A_Cwj#suskIEyDx(gOQWl#~E#RqaDyClL(X<OZP5' );
define( 'NONCE_KEY',        '}>Dv/O4A9s[f(5G1L ?!i_Ub,H2j<N4|WT&2.y(*n^>&i?rm.dx9Q$F^P/#HJ:~x' );
define( 'AUTH_SALT',        'JkN`i:A%^qS#|&e}h)Ki9JB0eN{*`NcA<xgx,v-/&@5IAWVwLYs%PsF^F9jg_(LT' );
define( 'SECURE_AUTH_SALT', '3{IIWI*<Mr=}PDJAwk,DI8S,AwkmlV~a!.%D=oWd{~=;$$}1-*ne$w1nD;Jwz1a1' );
define( 'LOGGED_IN_SALT',   ' hk/~DtQZve$luZXel,@hsfo*B,lVMqc ~FcZE|ba=u:vf>Hap6H&0;EI$W]?0p0' );
define( 'NONCE_SALT',       'WAiFB/Y=py[d`_TLs90z#7}l*V97&/P4O&J6a#s*$vX^}Pt$#ZG^?j4>9K(k-fzN' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
