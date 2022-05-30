---
layout: docs
title: Business Central Improvements
---

This article will list the improvements that come with Microsoft Dynamics 365 Business Central upgrades. Most of these improvements are related to the regular operations you do in Garage Hive and you will find that they make it easier and more comfortable for you to use the system efficiently in your everyday operations.

## In this article
1. [BC 19 Improvements Released on May 2022](#bc-19-improvements-released-on-may-2022)
2. [BC 18 Improvements Released on November 2021](#bc-18-improvements-released-on-november-2021)

## BC 19 Improvements May 2022
1. **Use new templates with same flexibility as configuration templates**
   
   **Garage Hive Operation:** [Create item card templates](create-item-templates.html)
   <br>

   **Feature Details**: You can now use the capabilities of configuration templates with the new templates for customers, vendors, and items. These include the ability to add any field and to save and apply templates from the customer, vendor, and item lists.

      ![](media/garagehive-new-templates.png)

2. **Add non-inventory items on requisition and planning worksheets**
   
   **Garage Hive Operation:** [Re-ordering policies and requisition worksheet](garagehive-requisition-worksheet.html)
   <br>

   **Feature Details**: You can process non-inventory lines in much the same way as other types of items. If you use requisition and planning worksheets as the starting point for purchase orders in your procurement process, you can manually enter lines for non-inventory items on the worksheets. Then, when you create your purchase orders, the non-inventory items will be included. This allows you to use the same procurement process for inventory and non-inventory items.

      ![](media/garagehive-add-non-inventory-items-on-requisition.png)

3. **Chart of Accounts Overview page**
   <br>

   **Feature Details**: The Chart of Accounts page displays accounts in a hierarchical list that offers fast access to the key information for each account. However, the list is static, and if you have a lot of accounts you might have to do a bit of scrolling to view information for different accounts. If you just want a quick overview of the basics, such as net changes and balances, the Chart of Accounts Overview page is a useful alternative. The column layout on the page is now the same as you’ll find on the Chart of Accounts page (there are just fewer of them), so you won’t have to reorient yourself, and you can expand or collapse the hierarchical levels to condense the view.

      ![](media/garagehive-chart-of-accounts-overview-page.png)
      
4. **Default line type in the sales and purchase documents**
   <br>

   **Feature Details**: Sales and purchase documents can contain different types of lines, such as G/L Account, Item, Resource, or Fixed Asset. In this release, you can select the default line type that will be suggested when you create new documents. You can specify the default type for sales on the Sales & Receivables Setup page, and for purchases on the Purchase & Payables Setup page, in the Document Default Line Type field. Afterwards, the first line on the document will always use the default type that you specified, and you can start working with lines by selecting values in the No. field. Of course, you can change the type on the line if needed.

      ![](media/garagehive-default-line-type.png)

5. **More control over address information data entry**
   <br>

   **Feature Details**: You can set the Require Country/Region Code in Address by selecting this field on the General Ledger Setup page. When this field is selected, because the address format is related to the selected Country/Region, changes to the Country/Region Code field on addresses for customers, contacts, or vendors will reset the values in other address fields.

      ![](media/garagehive-more-control-over-address-information.png)

6. **Posting Preview can now show G/L and VAT entries in hierarchical view and is easily extensible**
   <br>

   **Feature Details**: You can enable the new way of showing Posting Preview by choosing Extended in the Posting Preview Type field on the General Ledger Setup page. When the extended posting preview is turned on, you can choose to preview a posting using the **Preview Posting** action (or the Ctrl+Alt+F9 keyboard shortcut)—for example, on a payment journal. On the Posting Preview page, you can choose **Show Hierarchical View** to group the entries.

      ![](media/garagehive-posting-preview-type.png)

7. **Tour of Business Central to help users get to know the basics**
   <br>

   **Feature Details**: With this release, we expand the use of educational tours so they can also include teaching tips that are defined by the platform to call out system controls, such as the top navigation bar as well as controls for sorting and filtering. These tours can provide an introduction to a better understanding of the home page. In all, users can more easily learn the basics of the Business Central user interface.

      ![](media/garagehive-tour-of-business-central.png)

8. **Use multiple units of measure for items**
   <br>

   **Feature Details**: Information about weights and volume are available in all sales documents and purchase documents (you can add the Unit Gross Weight, Unit Net Weight, Unit Volume, and Units per Part via personalization).

      ![](media/garagehive-multiple-units-of-measure.png)

9. **Send mail from entities using Word templates as body or attachment**
   <br>

   **Feature Details**: The Send Email action is now available on the Business Central entities that have an email address, such as customers, contacts, vendors, users, and bank accounts pages. You can now compose and send emails from any page that displays the entity.

      ![](media/garagehive-send-mail-using-word-templates.png)

10. **Enhancements to working with Microsoft Excel**
   <br>

   **Feature Details**:
   - A new home for Open in Excel and Edit in Excel: introduction of the Share icon and menu in which users will find the Open in Excel and Edit in Excel actions.
   
      ![](media/garagehive-open-in-excel-and-edit-in-excel.png)

   - Downloading embedded lists to Excel (Open in Excel action): Lists that are embedded in a part on a page can now be exported to Excel.
   
      ![](media/garagehive-downloading-embedded-lists-in-excel.png)

   - Exporting reports to Excel: For reports, you can now select to export the report data to Excel on the request page. The Excel file will only include the raw data and not the report layout.
   
      ![](media/garagehive-exporting-reports-in-excel.png)

<br>

## BC 18 Improvements - November 2021
1. **Dimension corrections (for G/L Entries)**

   **Garage Hive Operation:** [Working with dimensions](garagehive-understanding-dimensions-in-business-central.html)
   <br>

   **Feature Details**: On the General Ledger Entries page, the Correct Dimensions action lets you correct dimensions on posted entries by editing the dimension value, adding new dimensions, or removing them. Administrators can also lock dimensions for corrections, specify that corrections must respect closed accounting periods, and view a change log for a given G/L entry in order to revert the entry to its original value.

2. **Inventory documents – New capability to adjust your inventory**

   **Garage Hive Operation:** Inventory adjustments in Garage Hive
   <br>

   **Feature Details:** You can use the Inventory Receipt and Inventory Shipment documents to adjust your inventory. Search for Inventory Receipt to register an increase of inventory. For example, this is useful when preparing to go live or adding open balances. Search for Inventory Shipment to write off missing or damaged goods. If you want to reprint posted documents, find the documents as Posted Inventory Receipt and Posted Inventory Shipment, respectively. 

3. **Payment reconciliation journal improvements**

   **Garage Hive Operation:** [Working with Payment Reconciliation Journal](garagehive-payment-reconciliation-journals.html)
   <br>

   **Feature Details:** You must regularly reconcile your bank, receivables, and payables accounts by applying payments recorded in the bank to their related open (unpaid) invoices and credit memos or other open entries in Business Central. With this improvement, the payment reconciliation journal supports application against employee ledger entries.

4. **Client performance improvements**

   **Garage Hive Operation:** Working with Garage Hive
   <br>

   **Feature Details:** Based on the success of FactBox performance enhancements in earlier improvements, similar optimizations to Role Center home pages has been applied. Parts load one by one, starting from the top, and only if they are shown on screen. The remaining parts are loaded on demand when you scroll to them, reducing the total time to load the Role Center and allowing you to start interacting with Role Center content quicker. This improvement applies to desktop and tablet clients.

5. **Export any list part to Excel**

   **Garage Hive Operation:** Open in Excel
   <br>

   **Feature Details:** Lists that are displayed as a part on a page can now be exported to Excel. For example, you can export sales lines from a Jobsheet card, list parts on the Role Center, lists in the FactBox pane, or even lists on ListPlus pages such as the Item By Location page. Similar to full-page lists, the Open in Excel action downloads a static copy of your list as an Excel worksheet, complete with any filters and sort order that you have applied. 

6. **Usability enhancements**

   **Garage Hive Operation:** Working with Garage Hive
   <br>

   **Feature Details:** 
   * Double click a record in a list.

      ![](media/garagehive-double-click-row.png)

   * Consistently select all text when clicking on a field.

      ![](media/garagehive-cell-value.png)

   * Working at reduced browser width or upscaled screens. Made the desktop interface more responsive, where it adapts automatically to the available space. Improvements include: 
     - Page inspection pane can be collapsed to the side of the screen.
     - Horizontal scrollbar added to fixed layout and grid layout controls to prevent compressing tabular values.
     - Action buttons on report request pages, and all dialogs are always visible and accessible.
     - Report preview stretches to fill the available space, and toolbar buttons remain visible and accessible.
     - At reduced width, page margins automatically shrink to display more content.
     - Buttons and menus in the Business Central header remain accessible. 
