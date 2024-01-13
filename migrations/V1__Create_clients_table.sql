CREATE TABLE IF NOT EXISTS public.clients (
    id SERIAL PRIMARY KEY,
    b_id INTEGER UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    frequency VARCHAR(255),
    type_of_service VARCHAR(255)
);