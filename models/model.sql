CREATE DATABASE shopping

-- CREATE TABLE types (
--     id serial PRIMARY KEY,
--     name varchar(32) NOT NULL,
--     image varchar(512) NOT NULL
-- );

-- CREATE TABLE shopping (
--     id serial PRIMARY KEY,
--     name varchar(32) NOT NULL,
--     adress varchar(1024) NOT NULL,
--     image varchar(512) NOT NULL,
--     contact varchar(13) UNIQUE NOT NULL,
--     link varchar(64) ,
--     type_id int REFERENCES types(id),
--     loc_lat smallint NOT NULL,
--     loc_long smallint NOT NULL,
--     litsense VARCHAR(32)
-- );

-- CREATE TABLE cotegories (
--     id serial PRIMARY KEY,
--     name varchar(32) NOT NULL,
--     image varchar(512) NOT NULL,
--     shop_id INT REFERENCES shopping(id)
-- );

-- CREATE TABLE sap_categories (
--     id serial PRIMARY KEY,
--     name varchar(32) NOT NULL,
--     image varchar(512) NOT NULL,
--     cat_id INT REFERENCES cotegories(id)
-- );

-- CREATE TABLE products (
--     id serial PRIMARY KEY,
--     name varchar(32) NOT NULL,
--     image varchar(512) NOT NULL,
--     price SMALLINT NOT NULL,
--     description TEXT NOT NULL,
--     sap_cat_id int REFERENCES sap_categories(id)
-- );

-- CREATE TABLE roles (
--     id serial PRIMARY KEY,
--     type VARCHAR(15) NOT NULL,
--     get BOOLEAN DEFAULT false,
--     set BOOLEAN DEFAULT false,
--     put BOOLEAN DEFAULT false,
--     delete BOOLEAN DEFAULT false
-- );

-- CREATE TABLE users (
--     id serial PRIMARY KEY,
--     username VARCHAR(20) NOT NULL,
--     contact VARCHAR(13) UNIQUE NOT NULL,
--     link VARCHAR(64),
--     password VARCHAR(64) NOT NULL,
--     image VARCHAR(512) NOT NULL,
--     role_id int REFERENCES roles(id)
-- );


-- CREATE TABLE orders (
--     id serial PRIMARY KEY,
--     user_id int REFERENCES users(id) ON DELETE CASCADE,
--     pro_id int REFERENCES products(id), 
--     add_date  TIMESTAMP
-- );

-- CREATE TABLE comments (
--     id serial PRIMARY KEY,
--     user_id int REFERENCES users(id) ON DELETE CASCADE,
--     pro_id int REFERENCES products(id) ON DELETE CASCADE,
--     text VARCHAR(1024) NOT NULL,
--     ball SMALLINT DEFAULT '1',
--     add_date TIMESTAMP
-- );


CREATE TABLE types (
    id serial PRIMARY KEY,
    name varchar(32) NOT NULL,
    image varchar(512) NOT NULL
);


insert into types (name , image) VALUES
('clothes','/images/clothes/clothes.jpg'),
('electronics','/images/electronics/electronics.jpg'),
('shoes','/images/shoes/shoes.jpg'),
('foods','/images/foods/foods.jpg'),
('dishes','/images/dishes/dishes.jpg'),
('construction','/images/construction/construction.jpg'),
('perfumes','/images/perfumes/perfumes.jpg'),
('books','/images/books/books.jpg'),
('sports','/images/sports/sports.jpg');

SELECT * FROM types;


CREATE TABLE shopping (
    id serial PRIMARY KEY,
    name varchar(32) NOT NULL,
    adress varchar(1024) NOT NULL,
    image varchar(512) NOT NULL,
    contact varchar(13) UNIQUE NOT NULL,
    link varchar(64) ,
    type_id int REFERENCES types(id),
    loc_lat smallint NOT NULL,
    loc_long smallint NOT NULL,
    litsense VARCHAR(32)
);
INSERT INTO shopping (name,adress,image,contact,link,type_id,loc_lat,loc_long,litsense) VALUES 
('VIP BRAND','Toshkent, Samarqand Darvoza','/images/vip_brand/vip_brand.jpg', '+998977001213', '@vip_brand.uz', 1,123.1,252.12 ,'AS1234511'),
('Texnomart*','Toshkent, Chilonzor 2','/images/texnomart/texnomart.jpg', '+998977001214', '@texnomart.uz', 2,121.1,152.12 ,'AS1234512'),
('Korzinka','Toshkent, Chilonzor 20','/images/korzinka/korzinka.jpg', '+998977001215', '@korzinka.uz',4,123.1,252.12 ,'AS1234513'),
('Ultrashop','Toshkent, Shoyhontohur','/images/ultrashop/ultrashop.jpg', '+998977001216', '@ultrashop.uz', 2, 123.1,252.12 ,'AS1234514'),
('VIP BRAND','Toshkent, Shoyhontohur','/images/vip_brand/vip_brand1.jpg', '+998977001212', '@vip_brand.uz', 3, 123.1,252.12 ,'AS1234515'),
('Dish Chine','Toshkent, Chilonzor 22','/images/dish_chine/dish_chine.jpg', '+998977001217', '@dish_chine.uz', 5,123.1,252.12 ,'AS1234516'),
('Stroy Mart','Toshkent, Sergeli 5','/images/stroy_mart/stroy_mart.jpg', '+998977001218', '@stroy_mart.uz', 6,123.1,252.12 ,'AS1234517'),
('Paris','Toshkent, Yunusobot 1','/images/paris/paris.jpg', '+998977001219',  '@paris.uz',7,123.1,252.12 ,'AS1234518'),
('Qamar','Toshkent, Shoyhontohur 2','/images/qamar/qamar.jpg', '+998977001210',  '@qamar.uz',8,123.1,252.12 ,'AS1234519'),
('Olimpic','Toshkent, Chilonzor 24','/images/olimpic/olimpic.jpg', '+998977001211', '@olimpic.uz', 9,123.1,252.12 ,'AS1234510');


CREATE TABLE cotegories (
    id serial PRIMARY KEY,
    name varchar(32) NOT NULL,
    image varchar(512) NOT NULL,
    shop_id INT REFERENCES shopping(id)
);

INSERT INTO cotegories (name, image, shop_id) VALUES 
('dresses','/image/vip_brand/dresses.jpg',1),
('sweaters','/image/vip_brand/sweaters.jpg',1),
('coats','/image/vip_brand/coats.jpg',1),
('trousers','/image/vip_brand/trousers.jpg',1),
('komputers','/image/texnomart/komputers.jpg',2),
('smartphones','/image/texnomart/smartphones.jpg',2),
('smart watchs','/image/texnomart/smart watchs.jpg',2),
('laptops','/image/texnomart/laptops.jpg',2),
('airpods','/image/texnomart/airpods.jpg',2),
('conditsioners','/image/texnomart/conditsioners.jpg',2),
('oil','/image/korzinka/oil.jpg',3),
('vegetable','/image/korzinka/vegetable.jpg',3),
('dessert','/image/korzinka/dessert.jpg',3),
('drink','/image/korzinka/drink.jpg',3),
('dairy_products','/image/korzinka/dairy_products.jpg',3),
('fruits','/image/korzinka/fruits.jpg',3),
('fitnes','/image/olimpic/fitnes.jpg',9),
('boxing','/image/olimpic/boxing.jpg',9),
('gymnastics','/image/olimpic/gymnastics.jpg',9),
('football','/image/olimpic/football.jpg',9),
('swimming','/image/olimpic/swimming.jpg',9),
('basketball','/image/olimpic/basketball.jpg',9),
('struggle','/image/olimpic/struggle.jpg',9),
('karate','/image/olimpic/karate.jpg',9),
('chess','/image/olimpic/chess.jpg',9);




CREATE TABLE sap_categories (
    id serial PRIMARY KEY,
    name varchar(32) NOT NULL,
    image varchar(512) NOT NULL,
    cat_id INT REFERENCES cotegories(id)
);


INSERT INTO sap_categories (name, image, cat_id) VALUES 
('adidas','/image/vip_brand/dresses/adidas.jpg',1),
('fila','/image/vip_brand/dresses/fila.jpg',1),
('dolge&gobbana','/image/vip_brand/dresses/dolge&gobbana.jpg',1),
('lacoste','/image/vip_brand/dresses/lacoste.jpg',1),
('adidas','/image/vip_brand/sweaters/adidas.jpg',2),
('lacoste','/image/vip_brand/sweaters/lacoste.jpg',2),
('jmw','/image/vip_brand/sweaters/jmw.jpg',2),
('sertex','/image/vip_brand/sweaters/sertex.jpg',2),
('adidas','/image/vip_brand/sweaters/adidas.jpg',2),
('lacoste','/image/vip_brand/sweaters/lacoste.jpg',2),
('jmw','/image/vip_brand/sweaters/jmw.jpg',2),
('sertex','/image/vip_brand/sweaters/sertex.jpg',2),
('lacoste','/image/vip_brand/trousers/lacoste.jpg',4),
('mackbook','/image/texnomart/komputers/mackbook.jpg',5),
('lenovo','/image/texnomart/komputers/lenovo.jpg',5),
('hp','/image/texnomart/komputers/hp.jpg',5),
('acer','/image/texnomart/komputers/acer.jpg',5),
('mi','/image/texnomart/smartphones/mi.jpg',6),
('iphone','/image/texnomart/smartphones/iphone.jpg',6),
('samsung','/image/texnomart/smartphones/samsung.jpg',6),
('huawei','/image/texnomart/smartphones/huawei.jpg',6),
('huawei','/image/texnomart/smartphones/huawei.jpg',6),
('cok','/image/korzinka/drink/cok.jpg',15),
('cola','/image/korzinka/drink/cola.jpg',15),
('mineral','/image/korzinka/drink/mineral.jpg',15),
('natural','/image/korzinka/fruits/natural.jpg',15),
('dry','/image/korzinka/fruits/dry.jpg',15),
('citrus','/image/korzinka/fruits/citrus.jpg',15);


CREATE TABLE products (
    id serial PRIMARY KEY,
    name varchar(32) NOT NULL,
    image varchar(512) NOT NULL,
    price SMALLINT NOT NULL,
    description TEXT NOT NULL,
    sap_cat_id int REFERENCES sap_categories(id)
);



INSERT INTO products (name,image,price,description,sap_cat_id) VALUES  
('boys', '/image/vip_brand/dresses/adidas/boys.jpg',150,'new fashion',1),    
('children', '/image/vip_brand/dresses/adidas/children.jpg',100,'new fashion',1),    
('girls', '/image/vip_brand/dresses/adidas/girls.jpg',180,'new fashion',1),    
('boys', '/image/vip_brand/dresses/fila/boys.jpg',150,'new fashion',2),    
('children', '/image/vip_brand/dresses/fila/children.jpg',150,'new fashion',2),    
('girls', '/image/vip_brand/dresses/fila/girls.jpg',150,'new fashion',2),    
('legion', '/image/texnomart/komputers/lenovo/legion.jpg',13500,'HDD: 1000 Gb, SSD: 512 Gb, OZU: 16',15),    
('celeron', '/image/texnomart/komputers/lenovo/celeron.jpg',5500,'HDD: 512 Gb, OZU: 4',15),    
('pavilion', '/image/texnomart/komputers/hp/pavilion.jpg',10500,'SSD: 512 Gb, OZU: 8',16),    
('celeron', '/image/texnomart/komputers/hp/celeron.jpg',3500,'HDD: 256 Gb, OZU: 4',16),    
('iphone 11', '/image/texnomart/smartphones/iphone/iphone 11.jpg',5800,'Mem: 1024 Gb, OZU: 16',19),    
('iphone 12 pro', '/image/texnomart/smartphones/iphone/iphone 12 pro.jpg',8800,'Mem: 1024 Gb, OZU: 16',19),    
('iphone 13', '/image/texnomart/smartphones/iphone/iphone 13.jpg',10000,'Mem: 1024 Gb, OZU: 16',19),    
('iphone 14 pro', '/image/texnomart/smartphones/iphone/iphone 14 pro.jpg',13000,'Mem: 1024 Gb, OZU: 16',19),    
('A6', '/image/texnomart/smartphones/samsung/A6.jpg',1500,'Mem: 64 Gb, OZU: 4',20),    
('S7', '/image/texnomart/smartphones/samsung/S7.jpg',3000,'Mem: 128 Gb, OZU: 8',20),    
('A52', '/image/texnomart/smartphones/samsung/A52.jpg',3500,'Mem: 128 Gb, OZU: 8',20),    
('A32', '/image/texnomart/smartphones/samsung/A32.jpg',2400,'Mem: 64 Gb, OZU: 4',20);


CREATE TABLE roles (
    id serial PRIMARY KEY,
    type VARCHAR(15) NOT NULL,
    get BOOLEAN DEFAULT false,
    set BOOLEAN DEFAULT false,
    put BOOLEAN DEFAULT false,
    delete BOOLEAN DEFAULT false
);


INSERT INTO roles (type, get, set, put, delete) VALUES
('admin',true, true, true, true ), 
('user',true, false, false, false ), 
('wmployee',true, true, true, true ); 




CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    contact VARCHAR(13) UNIQUE NOT NULL,
    link VARCHAR(64),
    password VARCHAR(64) NOT NULL,
    image VARCHAR(512) NOT NULL,
    role_id int REFERENCES roles(id)
);

INSERT INTO users (username, contact, link, password, image, role_id ) VALUES
('Admin', '+998944444444', '@admin', '038f270ca678c66f5bf393f958e8eebcf98b049e5a0d32a69cabf46b576cabbf','/image/users/admin.jpg',1), 
('Abbosbek', '+998941985642', '@abbosbek', '038f270ca678c66f5bf393f958e8eebcf98b049e5a0d32a69cabf46b576cabbf','/image/users/abbosbek.jpg',2), 
('Qodir', '+998993385542', '@qodir', '038f270ca678c66f5bf393f958e8eebcf98b049e5a0d32a69cabf46b576cabbf','/image/users/qodir.jpg',2), 
('Lobarxon', '+998915462172', '@lobarxon', '038f270ca678c66f5bf393f958e8eebcf98b049e5a0d32a69cabf46b576cabbf','/image/users/lobarxon.jpg',2), 
('Davron', '+998945451122', '@davron', '038f270ca678c66f5bf393f958e8eebcf98b049e5a0d32a69cabf46b576cabbf','/image/users/davron.jpg',2), 
('Mansur', '+998933021211', '@mansur', '038f270ca678c66f5bf393f958e8eebcf98b049e5a0d32a69cabf46b576cabbf','/image/users/mansur.jpg',2); 


CREATE TABLE orders (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id) ON DELETE CASCADE,
    pro_id int REFERENCES products(id), 
    add_date  TIMESTAMP
);


INSERT INTO orders (user_id, pro_id) VALUES
(2,10),
(3,5),
(4,1),
(5,6),
(6,10),
(2,8),
(6,4),
(5,1),
(2,4),
(3,5),
(4,6);


CREATE TABLE comments (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id) ON DELETE CASCADE,
    pro_id int REFERENCES products(id) ON DELETE CASCADE,
    text VARCHAR(1024) NOT NULL,
    ball SMALLINT DEFAULT '1',
    add_date TIMESTAMP
);


INSERT INTO comments (user_id, pro_id, text, ball) VALUES
(2,10,'yaxshi kompyuter arzon va sifatli',5),
(3,5,'farzandimga oldim narxi qimmat ekan',2),
(4,1,'yaxshi ko''ylak menga yoqdi',5),
(5,6,'!!!',4),
(6,10,'yaxshi kompyuter arzon ekan',5),
(2,8,'yaxshi kompyuter sifati uncha emas',3),
(6,4,'avval ham vip branddan kiyim olardim zo''r',5),
(5,15,'men samsungning doimiy foydalanuvchisiman',5),
(2,14,'iphone narxiga yarasha sifatli',5),
(3,5,'menga yoqmadi',0),
(4,7,'yaxshi kompyuter sifatli va chiroyli',5);


