---
layout: docs
title: How to perform a Contra Payment
---

#   How to perform a Contra Payment

Contra payments can be achieved via a general journal. 

Contra payments typically take place when you have a contact that is both a customer and a supplier, in the below example you owe the supplier £1000, and the supplier owes you £500. Once the below journal has been posted, you will owe the supplier £500. 

To start, search for "General Journals"

Please make sure you have "show more columns" enabled
![](media/garagehive-general-journals-columns.png)

Once you have shown more columns, you must make sure the following columns are also enabled, you can hide the rest for this particular journal. 

* Posting Date
* Document Type
* Document No. 
* Account Type
* Account No. 
* Account Name
* Description
* Amount
* BAL. Account Type
* BAL. Account No. 
* Applies-To Doc. No. 

There are two ways to process this journal, the first method is by selecting the documents that you want to contra. Select the "Applies-to Doc No." if it's a single document, or select "Application" then "Apply Entries" if it is for multiple documents. 

The Journal only needs the following information entering. 

* Posting Date
* Document Type
* Document No. 
* Account Type
* Account No. 
* Account Name
* Description
* Amount
* Applies-To Doc. No. 

Please note, the values are not likely to match, you must adjust the higher value down to match otherwise the journal won't balance. The below journal results in the customer and vendor balances reducing by £500, leaving the remaining balance to be phyiscally paid. 

![](media/garagehive-document-contra.png)

If the payments aren't being directly applied to a document then the second method must be used. The second method utilises a balancing account, usually some form of suspense account to transfer the payment from customer to vendor. 

The Journal only needs the following information entering. 

* Posting Date
* Document Type
* Document No. 
* Account Type
* Account No. 
* Account Name
* Description
* Amount
* BAL. Account Type
* BAL. Account No. 

![](media/garagehive-contra-payment.png)




