---
layout: docs
title: Setting up Vehicle Sales in Garage Hive
---

## In this article
1. [What you can export via the Sage Accounting integration](#what-you-can-export-via-the-sage-accounting-integration)
2. [Initial Setup](#initial-setup)
3. [How to run the export](#how-to-run-the-export)


### What you can export via the Sage Accounting integration

Garage Hive allows you to export your data to Sage Accounting; you can export the following:

* Customer Invoices
* Customer Credit Memos
* Customer Payments
* Customer Refunds
* Vendor Invoices
* Vendor Credit memos

{% include tip.html title="Note" text="We currently don't support exporting vendor payments, it is recommended that this is done in your external accountancy system." %}

### Initial Setup
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Accountancy Integration Setup**, and select the related link.

   ![](media/garagehive-sage-accounting-setup1.png)

1. Select **Sage Accounting** as the **Accountancy System** in the **General** FastTab.
1. Specify whether the data should be exported using the posting date or the document date in the **Export Customer Ledger by** and **Export Vendor Ledger by** fields. The most commonly used approach is by **Document Date**. Garage Hive users are often limited to only posting within the current date, therefore the posting date may differ from the date on the invoice from the supplier, whereas the document date would match.

   ![](media/garagehive-sage-accounting-setup2.png)

1. Select the **Integration Enabled** slider to enable the integration.

   ![](media/garagehive-sage-accounting-setup3.png)

### How to run the export 
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Export to Accountancy System**, and select the related link.

    ![](media/garagehive-sage-accounting-setup4.png)

2. Select the following options:
   * **Export Customer Invoices/Credit Memos** - This will export all Customer invoices/credit memos for the given date range. 
   * **Export Customer Payments/Refunds** - This will export Invoice payments/refunds as well as payments to accounts within the specified date range.
   * **Export Vendor Invoices/Credit Memos** - This will export all posted purchase orders/purchase invoices as well as posted purchase return orders/purchase credit memos within the given date range.
   * **Export Type** - All or New. You may either export **All** of the documents within the date range or only the **New** documents. Selecting **New** will exclude any previously exported documents. This implies that it is **important** that you keep all prior exported files secure since they will never be reproduced. When using **New**, a transaction that has already been exported will be flagged and will not be exported again.
   * **Date From** and **Date To** - Choose your date range.

3. Under Catalogs:
   * **Export All Customers** - This will generate an export of all customers in the system.
   * **Export All Vendors** - This will generate an export of all vendors in the system.

     ![](media/garagehive-sage-accounting-setup5.png)


<br>

### **See Also**

[Video: Garage Hive Integration with Sage Accounting](https://www.youtube.com/watch?v=-UMuQjqTgmQ){:target="_blank"} \
[How to Import Your Exported Data Into Sage 50 Accounts](garagehive-import-exported-data-to-sage-50-accounts.html){:target="_blank"}
[How to Integrate Garage Hive With Your External Accountancy System](garagehive-external-accountancy-integration.html){:target="_blank"} \
[How to Export to Your External Accountancy System](garagehive-finance-accountancy-export.html){:target="_blank"}

