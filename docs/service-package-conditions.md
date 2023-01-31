---
layout: docs
title: Service Package Conditions
---

# How to set up service package conditions in Garage Hive

Service package conditions allow you to filter Service Package versions by a set of criteria; they are filtered in documents and online documents if you have the online booking module.

Currently, you can set the following conditions for service package versions:

* Make
* Model
* Vehicle Type
* Fuel Type
* Customer Category
* Transmission
* Engine Model Code 
* Primary Make
* Primary Model

To set the conditions for a service package
1. Select **Catalogues** from the navigation menu in the Role Centre and then **Service Packages**.

   ![](media/garagehive-service-package-conditions1.png)

2. Choose the service package you want to give conditions and scroll down to the **Versions** sub-page. Click on **Manage** and select **Conditions**.

   ![](media/garagehive-service-package-conditions2.gif)

3. You can add various conditions to the **SP Version Conditions** page. In this case, we'll use **Primary Make**, **Primary Model**, **Fuel Type**, and **Customer Category**. Click on the first cell in the **Type** column and add these conditions.

   ![](media/garagehive-service-package-conditions3.gif)

4. Take note of the exclude check box on the right; sometimes, it's better to exclude an option rather than include all variants. A good example is excluding diesel, diesel/electric, and electric, which would result in a petrol version, as there are many more petrol and petrol/hybrids to list. 

   ![](media/garagehive-service-package-conditions4.png)

5. It is also possible to add the **Begins With** checkbox filter to conditions such as **Engine Model Codes** and **Vehicle Type** to include all vehicles that begin with the specified **Code**. For example, if you enter **N47** as the Engine Model Code for BMW, all vehicles in that condition will be included, and so on.

   ![](media/garagehive-service-package-conditions6.png)

6. In addition, you can set the condition of the vehicle's age based on the first registration date for when the vehicle was produced, rather than the production year, which can become less relevant over time. To set this condition, open the **Service Package Card** and scroll down to the version lines. Add the lower limit of the vehicle age in the **Age From** field, and the upper limit of the vehicle age in the **Age To** field for which you want the condition to apply.

   ![](media/garagehive-service-package-conditions7.png)

7. The **Location** condition, **Production Year** range, and **Engine Capacity** range can also be set as conditions within the version lines.

![](media/garagehive-service-package-conditions5.gif) 


<br>

### See Also

[Video: Service Package conditions](http://www.youtube.com/watch?v=DDrB5v6kzM0){:target="_blank"} \
[Setting up service packages](/docs/garagehive-service-packages.html) \
[Setting up service packages for online booking](/docs/garagehive-onlinebooking-service-packages.html) \
[Setting up primary makes and models](/docs/garagehive-setting-up-primary-makes-and-models.html) \
[Automatically adding Service Packages in documents](/docs/garagehive-automatically-adding-service-packages.html)