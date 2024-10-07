# MongoDB Overview

1. **What is MongoDB?**  
   MongoDB is an open-source, document-oriented NoSQL database used for high-volume data storage. Instead of using tables and rows as in traditional relational databases, MongoDB uses collections and documents.  
   - **Collection**: A group of MongoDB documents.  
   - **Document**: A way to organize and store data as a set of field-value pairs.

2. **Advantages of MongoDB**  
   - Supports field, range-based, and string pattern matching queries for searching data in the database.  
   - Supports primary and secondary indexing on any fields.  
   - Inbuilt support for data partitioning (Sharding).  
   - Uses a dynamic database schema.

3. **Features of MongoDB**  
   - **Indexing**: Supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities.  
   - **Aggregation**: Provides an aggregation framework based on the concept of data processing pipelines.  
   - **Special Collection and Index Types**: Supports time-to-live (TTL) collections for data that should expire at a certain time.  
   - **File Storage**: Supports an easy-to-use protocol for storing large files and file metadata.  
   - **Sharding**: The process of splitting data up across machines.

4. **What is MongoShell?**  
   It is a JavaScript shell that allows interaction with MongoDB instances from the command line.

5. **What is Indexing?**  
   Indexing is a technique that helps in reducing the search time of database queries or helps in faster accessing the database. It supports efficient execution of queries in MongoDB.

6. **Explain Sharding?**  
   Sharding is a type of database partitioning in which a large database is divided or partitioned into smaller data and different nodes. These shards are not only smaller but also faster. Sharding allows for storing more data and handling more load without requiring larger or more powerful machines.

7. **How does MongoDB store data?**  
   MongoDB stores data in BSON (Binary JSON) format, a binary-encoded serialization of JSON-like documents. These documents are stored in collections within databases.

8. **What is a primary key in MongoDB?**  
   In MongoDB, the `_id` field serves as the primary key for a document. It must be unique within a collection and is automatically generated if not provided during document insertion.

9. **What is a replica set in MongoDB?**  
   A replica set is a group of servers that maintain the same data to keep identical copies of your data on multiple servers. It provides data redundancy and high availability. One server acts as the primary, while others are secondary servers that replicate data from the primary.

10. **What are the data types supported by MongoDB?**  
    MongoDB supports various data types, including string, number, boolean, date, array, object, null, regex, and more. It also supports geospatial and binary data types.

11. **What is a cursor in MongoDB, and when is it used?**  
    A cursor in MongoDB is an iterator to retrieve and process documents from query results. Cursors are used when fetching large result sets, allowing you to retrieve documents in batches.

12. **Can you explain the concept of data modeling in MongoDB?**  
    Data modeling in MongoDB involves designing the structure of your documents and collections to best represent your data and meet your application's requirements. It includes defining document schemas, relationships, and indexing strategies.

13. **Aggregation in MongoDB?**  
    MongoDB's aggregation framework is a powerful tool designed for processing and transforming documents within a collection. It is based on the concept of a pipeline. Documents from a collection pass through one or more stages, each performing different operations on its inputs.

14. **What are the main features of MongoDB?**  
    - Flexibility in data modeling  
    - Horizontal scalability  
    - Support for unstructured data  
    - Powerful query language  
    - Automatic sharding  
    - High availability with replica sets

15. **What is the purpose of using MongoDB over other databases?**  
    MongoDB is chosen over other databases for its ability to handle flexible, unstructured, and rapidly changing data. It excels in scenarios where scalability, speed, and agility are essential, such as web and mobile applications, real-time analytics, and content management systems. Its horizontal scaling capabilities also make it suitable for large-scale data storage and processing.

16. **What are the different types of indexes in MongoDB?**  
    MongoDB supports various indexes, including:  
    - Single-field indexes  
    - Compound indexes  
    - Geospatial indexes  
    - Text indexes  
    - Hashed indexes  
    - Wildcard indexes

17. **How do you scale a MongoDB database?**  
    You can scale MongoDB horizontally by adding more servers to a cluster, vertically by upgrading server hardware, or by using sharding to distribute data across multiple servers in a sharded cluster.

18. **How do you implement security in MongoDB?**  
    MongoDB provides a range of security capabilities, including authentication, role-based access control (RBAC), SSL/TLS encryption, auditing, and network security, ensuring data safeguarding and preventing unauthorized access.

19. **How do you optimize query performance in MongoDB?**  
    You can optimize query performance by creating appropriate indexes, using the Aggregation Pipeline, minimizing the number of queries, and optimizing query patterns to leverage the query planner.

20. **Why NoSQL is Used Over SQL?**  
    NoSQL is preferred over SQL in many cases because it offers more flexibility and scalability. The primary benefit of using a NoSQL system is that it provides developers with the ability to store and access data quickly and easily, without the overhead of a traditional relational database.

21. **Which is better SQL or NoSQL?**  
    The decision of which type of database to use - SQL or NoSQL - will depend on the particular needs and requirements of the project. For example, if you need a fast, scalable, and reliable database for web applications, then a NoSQL system may be preferable. On the other hand, if your application requires complex data queries and transactional support, then an SQL system may be the better choice.

22. **Explain the structure of ObjectID in MongoDB.**  
    ObjectID is a 12-byte BSON type. These are:  
    - 4 bytes: value representing seconds  
    - 3 bytes: machine identifier  
    - 2 bytes: process ID  
    - 3 bytes: counter

23. **What is primary and secondary replica set in MongoDB?**  
    In MongoDB, primary nodes are the nodes that can accept writes, also known as master nodes. The replication in MongoDB is single-master, so only one node can accept write operations at a time. Secondary nodes are known as slave nodes. These are read-only nodes that replicate from the primary.

24. **MongoDB Query Operators?**  
    There are many query operators that can be used to compare and reference document fields.  
    - **Comparison**:  
        - `$eq`: Values are equal  
        - `$ne`: Values are not equal  
        - `$gt`: Value is greater than another value  
        - `$gte`: Value is greater than or equal to another value  
        - `$lt`: Value is less than another value  
        - `$lte`: Value is less than or equal to another value  
        - `$in`: Value is matched within an array  
        
    - **Logical**:  
        - `$and`: Returns documents where both queries match  
        - `$or`: Returns documents where either query matches  
        - `$nor`: Returns documents where both queries fail to match  
        - `$not`: Returns documents where the query does not match  

    - **Evaluation**:  
        - `$regex`: Allows the use of regular expressions when evaluating field values  
        - `$text`: Performs a text search  
        - `$where`: Uses a JavaScript expression to match documents  

25. **MongoDB Update Operators?**  
    There are many update operators that can be used during document updates.  
    - **Fields**:  
        - `$currentDate`: Sets the field value to the current date  
        - `$inc`: Increments the field value  
        - `$rename`: Renames the field  
        - `$set`: Sets the value of a field  
        - `$unset`: Removes the field from the document  

    - **Array**:  
        - `$addToSet`: Adds distinct elements to an array  
        - `$pop`: Removes the first or last element of an array  
        - `$pull`: Removes all elements from an array that match the query  
        - `$push`: Adds an element to an array  
