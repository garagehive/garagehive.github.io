---
layout: docs
title: Service Packages in Garage Hive
---

<a name="top"></a>

## In this article
1. [Creating a Service Package](#creating-a-service-package)
2. [Adding Fixed Price and Discounts for the Service Package](#adding-fixed-price-and-discounts-for-the-service-package)
3. [Creating New Service Package Versions by Copying from Other Versions](#creating-new-service-package-versions-by-copying-from-other-versions)
4. [Adding Checklist Template Code to Service Package Card](#adding-checklist-template-code-to-service-package-card)
5. [Adding a Service Package to a Jobsheet as a Technician](#adding-a-service-package-to-a-jobsheet-as-a-technician)

### Creating a Service Package
Service packages are a powerful tool for helping you build jobs faster, simplify job pricing, and add consistency.

To create or edit a service package: 
1. Open the service packages list, by selecting **Catalogues** and then **Service Packages** from the role centre navigation menu.
2. From the **Service Package List** page, you can either edit an existing service package or create a new service package by selecting the **New** action. 

   ![](media/garagehive-create-service-package1.gif)

3. Fill in a **Service Package No.** (often an abbreviation of the description) and a **Description** for the package in the **Service Package Card**.

   ![](media/garagehive-create-service-package2.gif)

4. In the **General** FastTab, there is a slider for **Compress Document Lines**, which, when enabled, compresses all the lines in this package on the printed document to show only the package description and its value.
5. In the **Main Description** field, select either **Package Header** or **Package Version**. This determines the description that will be added to the document; package header is the description in the **General** FastTab, and **Package Version** is the description of the version that you are about to setup in the **Versions** sub-page.

   ![](media/garagehive-create-service-package3.gif)

   {% include tip.html title="Note" text="The General FastTab's Extended Description field is used to elaborate or add more detailed information to the job. It appears on printouts if the Main Description is set to Package Header, otherwise, extended descriptions are available for each version line." %}

6. Under the **Versions** sub-page, you can now create any version of this package that you want. Add a description and select **Manage** then **Version Lines** to add item and labour lines to this version.

   ![](media/garagehive-create-service-package4.gif)

   {% include tip.html title="Tip" text="Here you can build the version as if it were lines on a Jobsheet, and we recommend using \"Placeholder Items\" like \"MISC\" to hold the place of items needed for this version." %}

   ![](media/garagehive-create-service-package5.gif)


[Go back to top](#top)

### Adding Fixed Price and Discounts for the Service Package
1. There is a **Fixed Price and Discounts** slider at the bottom of the **Service Package Card** under the **Invoicing** FastTab; if enabled, you will be able to change the prices and discounts within the versions. When versions are added to documents, prices or discounts in the versions are added to the document rather than being pulled from the related labour or item card or any pricing matrix that has been setup. If you try to change the price on the document, you will be warned that it is part of a fixed price package and asked whether you want to break that special pricing.

   ![](media/garagehive-create-service-package6.gif)

2. In addition, within the version lines, you will see an additional column **Allow fixed price Qty. Change**. If you choose this option, the system will allow you to change the quantity of that version line. It will adjust the unit price to maintain the line value. This is ideal for items such as engine oil, where the exact quantity cannot be predicted.

   ![](media/garagehive-create-service-package7.gif)


[Go back to top](#top)

### Creating New Service Package Versions by Copying from Other Versions
1. When you begin creating new versions, you may find the need to copy versions if they are very similar. To do this, select **Manage** and from the submenus, you will see two options; **Copy**, which copies the selected version to the line beneath, and **Copy From**, which allows you to select versions from other packages to copy into this one.

   ![](media/garagehive-create-service-package8.gif)


[Go back to top](#top)

### Adding Checklist Template Code to Service Package Card
1. We've also added the ability to add **Checklist Template Code** to a **Service Package Card** so that service packages can automatically add checklists to jobs when they're added to a jobsheet. To add a **Checklist Template Code**, select it from the **General** FastTab field named **Checklist Template Code**.

    ![](media/garagehive-create-service-package9.gif)

2.  As a result, when you create a new Jobsheet and select the **Service Type** as one of the available **Service Packages** with a **Checklist Template Code**, the checklist is automatically added to the Jobsheet.

    ![](media/garagehive-create-service-package10.gif)


[Go back to top](#top)

### Adding a Service Package to a Jobsheet as a Technician
When logged in to the technician app, you can add a service package to a Jobsheet depending on the requirements of the job being done. Here's how:

1. From the technician app, select **Easy Clocking**, then **Select existing Jobsheet**. Select the Jobsheet to which you want to add a service package by clicking on it.

   ![](media/garagehive-service-package-technician1.png)

2. Select **Open Jobsheet** from the pop-up menu. Click the three vertical dots in the bottom right corner, then scroll down to the **Lookup** menu. Choose the **Service Package** option.

   ![](media/garagehive-service-package-technician2.png)

3. Choose the service package to add in the Jobsheet. The service package will now be added to the Jobsheet, and you can begin working on the tasks in the Jobsheet.

   ![](media/garagehive-service-package-technician3.png)


[Go back to top](#top)

<br>

### **See Also**

[Video: How to create Service Packages in Garage Hive](http://www.youtube.com/watch?v=J1-KVnbnBLs){:target="_blank"} \
[Setting up Service Packages conditions](/docs/service-package-conditions.html) \
[Setting up Service Packages for online booking](/docs/garagehive-onlinebooking-service-packages.html) \
[Automatically adding Service Packages in documents](/docs/garagehive-automatically-adding-service-packages.html)