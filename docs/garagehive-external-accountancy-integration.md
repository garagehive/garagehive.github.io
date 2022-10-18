---
layout: docs
title: How to Integrate Garage Hive With Your External Accountancy System
---

# How to Integrate Garage Hive With Your External Accountancy System
To integrate your external accountancy system with Garage Hive:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Accountancy Integration Setup**, and select the related link.
2. Select the accountancy system that you are using in the **General** FastTab, **Accountancy System** field. The following accounting systems are available:

   ![](media/garagehive-external-accountancy-integration1a.gif)

3. We'll use **QuickBooks Online** as an example.

   ![](media/garagehive-external-accountancy-integration1.gif)

4. Turn on the **Integration Enabled** slider and select **Document Date** in both the **Export Customer Ledger by** and **Export Vendor Ledger by** fields.
5. From the actions bar Select **Init. Customers** and **Init. Vendors**, then click **Yes** in the pop-up windows. This generates an **External System No.** for all **Customer** and **Vendor** cards in Garage Hive. Exit the page.

   ![](media/garagehive-external-accountancy-integration2.gif)

6. When you open any **Customer** or **Vendor** card, you will see the **External System No.** as shown below.

   ![](media/garagehive-external-accountancy-integration3-a.png)

   ![](media/garagehive-external-accountancy-integration3-b.png)

7. You should then integrate the **Chart of Accounts** to the external system. Choose the ![](media/search_icon.png) icon, enter **Chart of Accounts** and select the related link.
8. In the **Chart of Accounts** page, select **Edit List** from the actions bar.

   ![](media/garagehive-external-accountancy-integration4.gif)

9.  In the **External System No.** column, enter the account numbers for the accounts you want to integrate with the external system. In this case, we'll integrate all of the **4000s** accounts.

   {% include tip.html title="Note" text="Typically only the 4000's and 5000's accounts are needed." %}


   ![](media/garagehive-external-accountancy-integration5.gif)

11. Finally, add the **External System No.** to the **Payments Methods**. Choose the ![](media/search_icon.png) icon, type **Payment Methods** and select the related link.
12. In the **External System No.** column, enter the corresponding code for the **Payment Methods** that you use in your external system.

   ![](media/garagehive-external-accountancy-integration6.gif)


<br>

### **See Also**

[How to Export to Your External Accountancy System](garagehive-finance-accountancy-export.html) \
[Xero API Integration Setup](xero-api-integration.html) \
[How to Import Your Exported Data Into Sage 50 Cloud](garagehive-import-exported-data-to-sage-50-accounts.html)



