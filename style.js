.services-section {
    padding: 40px 20px;
    text-align: center;
    background-color: #f9f9f9;
}

.pricing-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.service-card {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 25px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.service-card h3 {
    margin-top: 0;
    color: #333;
}

.service-card .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #0070ba; /* PayPal blue or your brand color */
    margin: 15px 0;
}

.service-card p {
    color: #666;
    font-size: 0.95rem;
    flex-grow: 1;
}

/* Ensure PayPal button containers fit neatly inside cards */
.service-card > div[id^="paypal-container-"] {
    margin-top: 20px;
}
