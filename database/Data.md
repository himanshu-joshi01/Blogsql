# You can solve the problem by two methods:
+ By import database file
+ By executing query

# Database query

```sql

create database demo;

```

```sql

CREATE TABLE users (
    Id VARCHAR(36) PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Image VARCHAR(255)
);


```

```sql

CREATE TABLE blogs (
    BlogId INT AUTO_INCREMENT PRIMARY KEY,
    UserId VARCHAR(36),
    Title VARCHAR(255) NOT NULL,
    Content TEXT,
    Image VARCHAR(255),
    FOREIGN KEY (UserId) REFERENCES users(Id)
);


```

# Database data file is on database folder




---


### Thank You