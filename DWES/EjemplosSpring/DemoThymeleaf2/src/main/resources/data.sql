insert into products (name, description, price) values ('Ratón Logitech F14', 'Bueno bonito y barato', 8);
insert into products (name, description, price) values ('Teclado Nisu MS3', 'Teclado mecánico en blanco', 12);
insert into products (name, description, price) values ('Auriculares Sony FS6', 'Inalámbricos', 22);

insert into customers (name, last_name, email) values ('Juan', 'Sin Miedo', 'johnnofear@gmail.com');
insert into orders (order_date, order_status, customer_id) values ('2022-01-12', 'Received', 1);
insert into orders (order_date, order_status, customer_id) values ('2022-02-12', 'Pending', 1);
insert into orders_products (order_id, product_id, quantity) values (1, 1, 1);
insert into orders_products (order_id, product_id, quantity) values (1, 2, 1);
insert into orders_products (order_id, product_id, quantity) values (2, 3, 1);
insert into orders_products (order_id, product_id, quantity) values (2, 1, 2);