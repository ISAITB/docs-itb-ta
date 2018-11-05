.. _manage_your_systems:

Manage your systems
===================

Before proceeding to test anything on the test bed you need to define one or more systems. Recall
that systems represent an organisation's software components for which your users make conformance
statements to test for (see :ref:`introduction__glossary__system`).

To view your systems click the **TESTS** button from the screen's header.

.. figure:: ../screenshots/header_admin.PNG
  :align: center

The screen that follows displays your organisation's currently defined systems.

.. figure:: ../screenshots/systems_admin.PNG
  :align: center

Your systems are presented in a table that displays for each one:

* Its **short name**, a brief name used to display in search results.
* Its **full name**, the complete system name presented in reports and detail screens.
* A **description**, providing additional context on the specific system.
* A **version** number.

To proceed with a specific system, either to view its past tests, conformance testing status or to execute new tests, click 
the appropriate row from the table. Once clicked you will change to view the conformance statements for the selected system (see :ref:`manage_your_conformance_statements__view_your_conformance_statements`).

.. _manage_your_systems__create:

Create a new system
-------------------

To create a new system click on the **Create system** button displayed in the top right side of the system list header.
Doing so presents you with a popup form to input the new system's information.

.. figure:: ../screenshots/systems_create.PNG
  :align: center
  :scale: 50%

The information to enter in the presented form are:

* The system's **short name** (required). This is used when the system is displayed in lists.
* The system's **full name** (required). This is included in reports that mention the system.
* An optional **description** to provide more information about the system.
* A **version** number (required). Although required this is not currently used in the test bed apart from display purposes.
* An option to **copy the test setup** from another system. Selecting one will replicate the selected system's conformance statements for the new system. Note
  that this option is not presented if no other systems are defined.

Once you have entered the system's information click the **Save** button to record it. You can also click the **Cancel** button
to close the popup without making any changes.

.. _manage_your_systems__edit:

Edit an existing system
-----------------------

To edit an existing system click the pencil icon displayed on the right end of the system's row. Doing so results in a popup
being displayed with the system's information, presented in editable input fields.

.. figure:: ../screenshots/systems_update.PNG
  :align: center
  :scale: 50%

You can proceed here to modify the **short name**, **full name**, **description** and **version** of the system. In addition you can select to **copy the test setup** 
from another system which will reset the system's conformance statements to match the selected one (upon confirmation). Note that this option is hidden if no
other systems are defined.

Once ready click the **Save** button to finish. Here you may also click the **Delete** button which, following confirmation, will proceed to
completely delete the system. In this case the tests realised for this system will still be searchable but will be presented
as obsolete (see :ref:`view_your_test_history`). Finally, you can also click the **Cancel** button to close this popup without
making any changes.