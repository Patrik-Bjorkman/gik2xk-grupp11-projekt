use webbshop;

insert into products (title, description, price, image_url, created_at, updated_at) values ('Samsung Micro', 'En fin Micro', 599.99, 'https://www.elgiganten.se/image/dv_web_D180001002214705/MS23K3515AW/samsung-mikrovagsugn-ms23k3515aw--pdp_zoom-3000--pdp_main-960.jp', '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into products (title, description, price, image_url, created_at, updated_at) values ('TCL 98tums TV', 'En stor TV', 19599.99, 'https://www.elgiganten.se/image/dv_web_D1800010021019971/437663/tcl-98-c735-4k-qled-smart-tv-2022--pdp_zoom-3000--pdp_main-960.jpg', '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into products (title, description, price, image_url, created_at, updated_at) values ('Bosch Torktumlare', 'Bosch torktumlare, perfekt till tvättstugan', 7495, 'https://www.elgiganten.se/image/dv_web_D1800010021572051/494037/bosch-torktumlare-wqg242aesn--pdp_zoom-3000--pdp_main-960.jpg', '2022-01-01 22:42:14', '2022-01-01 22:42:14');

insert into users (first_name, last_name, email, password, created_at, updated_at) values ('Karl', 'Karlsson', '123@du.se', '12345', '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into users (first_name, last_name, email, password, created_at, updated_at) values ('Anna', 'Andersson', '456@du.se', '12345', '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into users (first_name, last_name, email, password, created_at, updated_at) values ('Erik', 'Eriksson', '789@du.se', '12345', '2022-01-01 22:42:14', '2022-01-01 22:42:14');

insert into carts (payed, user_id, created_at, updated_at) values (false, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into carts (payed, user_id, created_at, updated_at) values (true, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into carts (payed, user_id, created_at, updated_at) values (false, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into carts (payed, user_id, created_at, updated_at) values (true, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into carts (payed, user_id, created_at, updated_at) values (false, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into carts (payed, user_id, created_at, updated_at) values (true, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');

insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (2, 1, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (1, 1, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (3, 2, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (1, 3, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (1, 3, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (1, 3, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (1, 4, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (1, 5, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into cart_rows (amount, cart_id, product_id, created_at, updated_at) values (1, 6, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');

insert into ratings (rating, product_id, created_at, updated_at) values (5, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (4, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (3, 1, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (2, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (1, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (5, 2, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (4, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (3, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
insert into ratings (rating, product_id, created_at, updated_at) values (2, 3, '2022-01-01 22:42:14', '2022-01-01 22:42:14');
