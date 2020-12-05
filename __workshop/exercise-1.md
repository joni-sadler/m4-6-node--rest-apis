# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

|  endpoint       | method   | Description                      |
|  --------       | ------   | -------------------------------- |
| `/product`      | `GET`    | Returns a list of all products   |
| `/product/123`  | `POST`   | Creates a new product            |
| `/product/123`  | `PUT`    | Updates the product              |
| `/product/123`  | `GET`    | Returns details of the product   |
| `/product/123`  | `DELETE` | Deletes the product              |
| `/customer`     | `GET`    | Returns a list of all customers  |
| `/customer/123` | `POST`   | Creates a new customer account   |
| `/customer/123` | `PUT`    | Updates the customer account     |
| `/customer/123` | `GET`    | Returns customer account details |
| `/customer/123` | `DELETE` | Deletes the customer account     |
| `/supplier`     | `GET`    | Returns a list of all suppliers  |
| `/supplier/123` | `POST`   | Creates a new supplier           |
| `/supplier/123` | `PUT`    | Updates the supplier account     |
| `/supplier/123` | `GET`    | Returns supplier account details |
| `/supplier/123` | `DELETE` | Deletes the supplier account     |


