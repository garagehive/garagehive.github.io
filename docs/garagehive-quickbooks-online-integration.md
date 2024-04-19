---
layout: docs
title: How to Integrate Garage Hive With QuickBooks Online
---

<a name="top"></a>

# How to Integrate Garage Hive With QuickBooks Online
Garage Hive has made it possible to integrate QuickBooks online accounting system in order to streamline your accounting processes and make them more efficient and accurate.

## In this article
1. [Initial Setup](#initial-setup)
2. [Integrate Chart of Accounts](#integrate-chart-of-accounts)
3. [Integrate Payment Methods](#integrate-payment-methods)
4. [Integrate VAT Posting](#integrate-vat-posting)
5. [How to run the export](#how-to-run-the-export)

### Initial Setup
To integrate **QuickBooks Online** with Garage Hive, follow these steps.

#### Quickbooks Mandatory Setup
To be able to integrate QuickBooks Online with Garage Hive, the following mandatory setup must be done on your QuickBooks Online system:
1. Click on the settings ![](media/settings.png) icon in the top right corner of screen, and choose **Accounts and Settings** from the dropdown menu..

   ![](media/garagehive-quickbooks-online-mandatory-settings1.png)

2. Select **Advanced** tab  located on the left side. Then, click on the edit icon along the **Automation** section.

   ![](media/garagehive-quickbooks-online-mandatory-settings2.png)

3. Disable the **Automatically Apply Credits** option, and click on **Save**.

   ![](media/garagehive-quickbooks-online-mandatory-settings3.png)

#### Garage Hive Initial Setup
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Accountancy Integration Setup**, and select the related link.

   ![](media/garagehive-quickbooks-online-integration1.png)

2. In the **General** FastTab, select **QuickBooks Online v2** as your accounting system in the **Accountancy System** field.

   ![](media/garagehive-quickbooks-online-integration2.png)

3. Select **Document Date** in both the **Export Customer Ledger by** and **Export Vendor Ledger by** fields, and turn on the **Integration Enabled** slider.

   ![](media/garagehive-quickbooks-online-integration3.png)


[Go back to top](#top)

### Integrate Chart of Accounts
To integrate the **Chart of Accounts** to **QuickBooks** accounting system: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Chart of Accounts** and select the related link.

   ![](media/garagehive-quickbooks-online-integration7.png)

2. In the **Chart of Accounts** page, select **Edit List** from the menu bar.
3. In the **External System No.** column, click on the three dots to select the corresponding **Account** that you use in your external system. In this case, we'll integrate all of the **4000s** accounts.

   {% include tip.html title="Note" text="Typically only the 4000's and 5000's accounts are needed." %}

   ![](media/garagehive-quickbooks-online-integration8.png)


[Go back to top](#top)

### Integrate Payment Methods
To add the **External System No.** to the **Payments Methods**: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Methods** and select the related link.

   ![](media/garagehive-quickbooks-online-integration9.png)

2. In the **External System No.** column, click on the three dots to select the corresponding code for the **Payment Methods** that you use in your external system.

   ![](media/garagehive-quickbooks-online-integration10.png)


[Go back to top](#top)

### Integrate VAT Posting
To integrate the VAT posting in your system: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **VAT Posting Setup** and select the related link.

   ![](media/garagehive-quickbooks-vat-posting1.png)

2. In the **External VAT Identifier Code** column, click on the three dots to select the corresponding code for the **VAT Posting** that you use in your external system.

   ![](media/garagehive-quickbooks-vat-posting2.png)


[Go back to top](#top)

### How to run the export 
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Export to Accountancy System**, and select the related link.

    ![](media/garagehive-sage-accounting-setup8.png)

2. Select the following options:
   * **Export Customer Invoices/Credit Memos** - This will export all Customer invoices/credit memos for the given date range. 
   * **Export Customer Payments/Refunds** - This will export Invoice payments/refunds as well as payments to accounts within the specified date range.
   * **Export Vendor Invoices/Credit Memos** - This will export all posted purchase orders/purchase invoices as well as posted purchase return orders/purchase credit memos within the given date range.
   * **Export Type** - All or New. Select **New**. Selecting **New** will exclude any previously exported documents. When using **New**, a transaction that has already been exported, will not be exported again.
   * **Date From** and **Date To** - Choose your date range.

3. Under Catalogs:
   * **Export All Customers** - This will generate an export of all customers in the system (**It is highly recommended that you do not select this**).
   * **Export All Vendors** - This will generate an export of all vendors in the system (**It is highly recommended that you do not select this**).

4. Click **OK**, to start exporting the data.

   ![](media/garagehive-sage-accounting-setup9.png)


[Go back to top](#top)


### **See Also**

[How to Export to Your External Accountancy System](garagehive-finance-accountancy-export.html){:target="_blank"} \
[How to Import the Exported Data to QuickBooks Online](garagehive-import-exported-data-to-quickbooks-online.html){:target="_blank"} \
[Accountancy System Integrations](garagehive-external-accountancy-integration.html){:target="_blank"}




