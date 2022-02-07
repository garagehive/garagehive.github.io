---
layout: docs
title: Business Central Improvements
---

# **BC 18 Improvements - November 2021**

This article will list the improvements that come with the November 2021 upgrade to Microsoft Dynamics 365 Business Central 18. Most of these improvements are related to the regular operations you do in Garage Hive and you will find that they make it easier and more comfortable for you to use the system efficiently in your everyday operations.

## Dimension corrections (for G/L Entries)

**Garage Hive Operation:** [Working with dimensions](garagehive-understanding-dimensions-in-business-central.html)
<br>

**Feature Details**: On the General Ledger Entries page, the Correct Dimensions action lets you correct dimensions on posted entries by editing the dimension value, adding new dimensions, or removing them. Administrators can also lock dimensions for corrections, specify that corrections must respect closed accounting periods, and view a change log for a given G/L entry in order to revert the entry to its original value.

## Inventory documents – New capability to adjust your inventory

**Garage Hive Operation:** Inventory adjustments in Garage Hive
<br>

**Feature Details:** You can use the Inventory Receipt and Inventory Shipment documents to adjust your inventory. Search for Inventory Receipt to register an increase of inventory. For example, this is useful when preparing to go live or adding open balances. Search for Inventory Shipment to write off missing or damaged goods. If you want to reprint posted documents, find the documents as Posted Inventory Receipt and Posted Inventory Shipment, respectively. 

## Payment reconciliation journal improvements

**Garage Hive Operation:** [Working with Payment Reconciliation Journal](garagehive-payment-reconciliation-journals.html)
<br>

**Feature Details:** You must regularly reconcile your bank, receivables, and payables accounts by applying payments recorded in the bank to their related open (unpaid) invoices and credit memos or other open entries in Business Central. With this improvement, the payment reconciliation journal supports application against employee ledger entries.

## Client performance improvements

**Garage Hive Operation:** Working with Garage Hive
<br>

**Feature Details:** Based on the success of FactBox performance enhancements in earlier improvements, similar optimizations to Role Center home pages has been applied. Parts load one by one, starting from the top, and only if they are shown on screen. The remaining parts are loaded on demand when you scroll to them, reducing the total time to load the Role Center and allowing you to start interacting with Role Center content quicker. This improvement applies to desktop and tablet clients.

## Export any list part to Excel

**Garage Hive Operation:** Open in Excel
<br>

**Feature Details:** Lists that are displayed as a part on a page can now be exported to Excel. For example, you can export sales lines from a Jobsheet card, list parts on the Role Center, lists in the FactBox pane, or even lists on ListPlus pages such as the Item By Location page. Similar to full-page lists, the Open in Excel action downloads a static copy of your list as an Excel worksheet, complete with any filters and sort order that you have applied. 

## Usability enhancements

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
