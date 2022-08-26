---
layout: docs
title: Tyre Scanner Integration in Garage Hive
---

## In this article
1. [Tyre Scanner System Setup](#tyre-scanner-system-setup)
2. [Tyre Scanner Checklist Template](#tyre-scanner-checklist-template)
3. [Getting the Tyre Scanner Report](#getting-the-tyre-scanner-report)

### Tyre Scanner System Setup
To connect the **Tyre Scanner** to the system:
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Tyre Scan Setup**, and select the related link.
2. Create a new text template code to be used in the Checklists in the field **Alignment Text Template Code**. 
3. Click **New** at the bottom left of the drop-down list, enter the **Code** as **ALIGNMENT**, and enter the **Text** that will inform the customer about the report, such as "*Based on tyre thread depth scans, we recommend performing wheel alignment.*".
4. Select the **Align** service package in the **Service Package Filter** column to use when quoting for the alignment. When completed, click **OK**.
5. Then, to enable the Tyre Scan in the system, slide the **Enable** slider to the right.

   ![](media/garagehive-tyre-scanner1.gif)

### Tyre Scanner Checklist Template
The Tyre Scanner is used in conjunction with the Checklist, which is where the Tyre Scan report is obtained. For achieve this, you should create a checklist template to be used with the tyre scanner report. Here's how to do it:
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Checklist Templates**, and select the related link.
2. Select the **MOT** checklist template from the list, and then click on **Linked Item Groups** in the actions bar.

   ![](media/garagehive-tyre-scanner2.gif)

3. Select the one related to the **Tyres** on the **Checklist Template Item Groups** page, and then click on the number in the column **Item Group Lines**. Click on **Edit List**, to enable editing on this page.
4. If the **Data Type**, **Vehicle Axle**, **Vehicle Side**, and **Wheel Position** columns are not visible in the **Checklist Items** page, add them through personalisation and move them closer together.

   ![](media/garagehive-tyre-scanner3.gif)

5. Customize the **Checklist Items** lines with tyres for the vehicle by filling in the following fields:

   | Checklist Item Group Description | Data Type | Vehicle Axle | Vehicle Position | Wheel Position |
   | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
   | Nearside front tyre & wheel | Tyres | 1 | N/S | Inner |
   | Offside front tyre & wheel | Tyres | 1 | O/S | Inner |
   | Nearside rear tyre & wheel | Tyres | 2 | N/S | Inner |
   | Offside rear tyre & wheel | Tyres | 2 | O/S | Inner |
   | Wheel alignment | Alignment | *blank* | *blank* | *blank* |

   ![](media/garagehive-tyre-scanner4.gif)

6. Then, in the **Value Category** column, select **Satisfactory**, **Advisory**, and **Urgent** under each tyre, which should match the description on each line. When finished, close the pages.

   ![](media/garagehive-tyre-scanner5.gif)

7. This Checklist Template setup allows the system to automatically fill in the fields from the Tyre Scan.

### Getting the Tyre Scanner Report
After scanning the tyres and sending the report to the system, you should create a new Checklist or select an existing one to get the Tyre Scanner Report. Here's how:
1. Open the Jobsheet for the vehicle in which you scanned the tyres and scroll down to the **Checklist** sub-page.
2. Select **Manage**, then **Create Vehicle Inspection**. Select the **MOT** checklist template that you have already set up on the page that appears. Click **OK**.
3. Click on the Checklist **No.** to open it. To make the Checklist editable, click on the **Edit** icon at the top.

   ![](media/garagehive-tyre-scanner6.gif)

4. Select **Process** menu, then **Get Tyre Scan** from the actions bar, and the report will be appled to the Checklist.

   ![](media/garagehive-tyre-scanner7.gif)

5. Scroll down to the **Tyres and Wheels** section of the Checklist to see the applied report.
6. A comment and a photo have been added to each tyre line, and you can view the photo by clicking on the three dots at the end of the line and selecting **Show Line Pictures**.

   ![](media/garagehive-tyre-scanner8.gif)

7. You can also view the Tyre Scanner's actual PDF report by selecting **Related** from the actions bar and then **Vehicle Tyre Scans**.
8. Select **Open Report** from the **View** column on the **Tyre Scans Page**.

   ![](media/garagehive-tyre-scanner9.gif)