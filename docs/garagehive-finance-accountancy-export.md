---
layout: docs
title: How to Export to Your External Accountancy System
---

<a name="top"></a>

# How to Export to Your External Accountancy System

Garage Hive allows you to export data to your **external accounting system**. You can export the following:

* Customer Invoices
* Customer Credit Memos
* Customer Payments
* Customer Refunds
* Customer Payments to account
* Customer Refunds to account
* Vendor Invoices
* Vendor Credit memos

{% include tip.html title="Note" text="We currently do not support exporting vendor payments; this should be done in your external accounting system." %}

## How to run the export 

To create an export, first confirm that your setup is complete; please contact a member of the team to assist you with the setup. Once the setup is complete, you can carry out the following:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Export to Accountancy System**, and select the related link.

   ![](media/garagehive-accountancy-export1.png)

2. Once you've opened the **Export to Accounting System** page, you can choose from the following options: 

   * **Export Customer Invoices/Credit Memos** - This will export all of the Customer invoices/credit memos within the date range selected. 
   * **Export Customer Payments/Refunds** - This will export the Invoice payments/refunds, as well as payments to accounts within the date range selected.
   * **Export Vendor Invoices/Credit Memos** - This will export all of the posted purchase orders/purchase invoices and the posted purchase return orders/purchase credit memos within the date range selected.
   * **Date To** - Choose the date until which you would like to export the data.

   ![](media/garagehive-accountancy-export2.png)

4. When you're done, click **OK**. Running the export will generate a zip file containing the transactions and the customers/vendors linked with the transactions. You can export Invoices/Credit Memos, Customer Payments and Refunds, and Vendor Invoices/Credit Memos all at once. 

{% include tip.html title="Note" text="To understand how to import these transactions into your accounting software, please refer to the documentation for your accounting system." %}

5. **Advanced Options** - There is a slider for advanced options on the export page.

   ![](media/garagehive-accountancy-export3.png)

6. The following options are available in the advanced options. 
     * **Export Type** - All or New. You can either export **All** of the documents within the date range or only the **New** documents. Selecting **New** will exclude any documents previously exported. This means it is important that you keep all previous exported files safe as these can never be re-produced. Once a transaction has been exported it will be flagged and not exported again when using **New**.
     * **Date From/To** - Select your date range.
     * **Catalogs** options:
         * * **Export All Customers** - This will produce an export of every single customer in the system.
           * **Export All Vendors** - This will produce an export of every single vendor in the system.

      ![](media/garagehive-accountancy-export4.png)


[Go back to top](#top)

<br>

### **See Also**

[Accountancy System Integrations](garagehive-external-accountancy-integration.html){:target="_blank"} \
[How to Import Your Exported Data Into Sage 50 Accounts](garagehive-import-exported-data-to-sage-50-accounts.html){:target="_blank"} \
[How to Import Your Exported Data Into QuickBooks Online](garagehive-import-exported-data-to-quickbooks-online.html){:target="_blank"}