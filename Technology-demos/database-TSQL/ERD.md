```mermaid
erDiagram
    production.categories {
        INT category_id PK "IDENTITY (1, 1)"
        VARCHAR category_name "255" NOT NULL
    }
    production.brands {
        INT brand_id PK "IDENTITY (1, 1)"
        VARCHAR brand_name "255" NOT NULL
    }
    production.products {
        INT product_id PK "IDENTITY (1, 1)"
        VARCHAR product_name "255" NOT NULL
        INT brand_id FK NOT NULL
        INT category_id FK NOT NULL
        SMALLINT model_year NOT NULL
        DECIMAL list_price "10, 2" NOT NULL
    }
    sales.customers {
        INT customer_id PK "IDENTITY (1, 1)"
        VARCHAR first_name "255" NOT NULL
        VARCHAR last_name "255" NOT NULL
        VARCHAR phone "25"
        VARCHAR email "255" NOT NULL
        VARCHAR street "255"
        VARCHAR city "50"
        VARCHAR state "25"
        VARCHAR zip_code "5"
    }
    sales.stores {
        INT store_id PK "IDENTITY (1, 1)"
        VARCHAR store_name "255" NOT NULL
        VARCHAR phone "25"
        VARCHAR email "255"
        VARCHAR street "255"
        VARCHAR city "255"
        VARCHAR state "10"
        VARCHAR zip_code "5"
    }
    sales.staffs {
        INT staff_id PK "IDENTITY (1, 1)"
        VARCHAR first_name "50" NOT NULL
        VARCHAR last_name "50" NOT NULL
        VARCHAR email "255" NOT NULL UNIQUE
        VARCHAR phone "25"
        TINYINT active NOT NULL
        INT store_id FK NOT NULL
        INT manager_id FK
    }
    sales.orders {
        INT order_id PK "IDENTITY (1, 1)"
        INT customer_id FK
        TINYINT order_status NOT NULL
        DATE order_date NOT NULL
        DATE required_date NOT NULL
        DATE shipped_date
        INT store_id FK NOT NULL
        INT staff_id FK NOT NULL
    }
    sales.order_items {
        INT order_id PK FK
        INT item_id PK
        INT product_id FK NOT NULL
        INT quantity NOT NULL
        DECIMAL list_price "10, 2" NOT NULL
        DECIMAL discount "4, 2" NOT NULL DEFAULT 0
    }
    production.stocks {
        INT store_id PK FK
        INT product_id PK FK
        INT quantity NOT NULL
    }

    production.products ||--o{ production.categories : "category_id"
    production.products ||--o{ production.brands : "brand_id"
    sales.orders ||--o{ sales.customers : "customer_id"
    sales.orders ||--o{ sales.stores : "store_id"
    sales.orders ||--o{ sales.staffs : "staff_id"
    sales.order_items ||--o{ sales.orders : "order_id"
    sales.order_items ||--o{ production.products : "product_id"
    production.stocks ||--o{ sales.stores : "store_id"
    production.stocks ||--o{ production.products : "product_id"
    sales.staffs ||--o{ sales.stores : "store_id"
    sales.staffs ||--o{ sales.staffs : "manager_id"
```
