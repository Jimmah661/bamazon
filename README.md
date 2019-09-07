# bamazon

## What it does
The Bamazon app is designed as a simple interface for clients to request specific stocked items.
It allows them to view a list of stocked items and request quantities of those items.

## Usage
The application can be started through a node server.
Once running you are provided with a stock list and the option to choose a specific stocked item. 
When a choice has been made a prompt for the required quantity will be made. 

If that stock is available the client will be notified of the associated cost and the stock will be deducted from the overall stock quantities. 

### Understocked errors
If the Bamazon warehouse does not have the required stock to meet the request of the client they will be notified of such and theiir order will be cancelled. 