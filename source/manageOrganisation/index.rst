.. _manage_organisation:

Manage your organisation
========================

.. note::
    **Editing your organisation details:** The "Admin Organisation" presented here is a special organisation linked to your
    community that is used for testing purposes. You would typically use it by configuring :ref:`conformance statements <manage_your_conformance_statements>`
    and :ref:`executing tests <execute_tests>` to :ref:`validate your testing setup <validate_test_setup>`.

To view your organisation's information click the **My organisation** link from the side menu. The screen you
are presented with shows you the information relevant to your organisation, split in the following sections:

* **Organisation details:** The name (short and full) of your organisation, as well as its currently applicable :ref:`landing page <community__manage_landing_pages>`.
* **Systems**: A tab listing the systems defined for your organisation. Each listed system displays its **name** (short and full),
  **description** and **version**.
* **REST API keys:** A tab, visible if :ref:`testing via REST API<execute_tests_rest>` is enabled, allowing you to view and manage the
  keys you need to use it.

.. figure:: ../screenshots/organisation_manage_admin.PNG
  :align: center

If you have defined additional properties for the community's organisations you will also see here an
**Additional properties** section that you can click to display your organisation's additional information. 

.. figure:: ../screenshots/organisation_manage_admin_properties.PNG
  :align: center

If this is expanded you will see a list of these additional properties along with their currently configured values.
Such properties can be simple texts, secret values (e.g. passwords) or files and, if supplied by you, will display a
help tooltip to understand their meaning.

You can view and edit these properties, depending on their type:

* For texts the current value is presented in an editable text field.
* For files you can **upload** a new file, whereas if one is already set you can **download** or **delete** it.
* For secrets a read-only text field indicates whether a value is currently set, whereas to provide a new value you
  check **Update**. When providing a new value you can also toggle the display of the typed characters.

.. note::
  Required properties are marked with an asterisk. It is is not mandatory to fill these in when editing the organisation's
  information but as long as required properties are missing you will not be able to launch tests.

Update any of the existing values and click on **Update** to persist your changes. From here you can also review your
organisation's :ref:`systems <manage_organisation__systems>`
and :ref:`REST API keys <manage_organisation__rest>` by clicking on their respective tabs. You may also click the **Manage tests** 
button to view your organisation's :ref:`conformance statements <manage_your_conformance_statements>`.

.. _manage_organisation__systems:

Manage your systems
-------------------

Selecting the **Systems** tab presents the :ref:`systems <introduction__glossary__system>` defined for your organisation.
Systems are an important concept in the test bed as they represent the software components you are testing for. Before
proceeding to test anything you will need to have one or more systems that you can use to define conformance statements.

.. figure:: ../screenshots/organisation_systems.png
  :align: center

Your organisation's systems are presented in a table that displays for each system:

* Its **short name**, a brief name used to display in search results.
* Its **full name**, the complete system name presented in reports and detail screens.
* A **description**, providing additional context on the specific system.
* A **version** number.

To :ref:`view the details of a specific system <manage_organisation__systems_edit>` you can click its row in the table. Clicking on
the **Create system** button allows you to :ref:`create a new system <manage_organisation__systems_create>`.

.. _manage_organisation__systems_create:

Create a new system
~~~~~~~~~~~~~~~~~~~

To create a new system click on the **Create system** button displayed above the listing of existing systems.

.. figure:: ../screenshots/systems_create.PNG
  :align: center

Doing so you will be presented with a screen to provide the new system's information. The inputs presented in the form are:

* The system's **short name** (required). This is used when the system is displayed in lists.
* The system's **full name** (required). This is included in reports that mention the system.
* An optional **description** to provide more information about the system.
* A **version** number. Although requested this is not currently used in the test bed apart from display purposes.

If your organisation includes other systems you are also presented here with an option to **copy the test setup** from
one of them as a source. Selecting one will replicate the selected system's conformance statements for the new system.

.. figure:: ../screenshots/systems_create_copy.PNG
  :align: center
  :scale: 70%

Once another system is selected to copy from, you are also presented with additional options to include:

* **System properties:** To also copy any additional system-level properties that the source system defines.
* **Conformance statement configurations:** To also copy any of the source system's configuration parameters set on its
  conformance statements.

If your community foresees additional system properties, and as long as you are not copying the properties from another system,
you will also see a **Additional properties** section. Clicking this expands the section so that you can manage your new system's properties.

.. figure:: ../screenshots/systems_create_properties.PNG
  :align: center

Configured properties can be simple texts, secret values (e.g. passwords) or files for which, if supplied by your community
administrator, you will also see a help tooltip to understand their meaning. Such properties can be edited as follows:

* For texts through an editable text field or by selecting a preset value from a dropdown list.
* For files you can **upload** a new file, whereas if one is already set you can **download** or **delete** it.
* For secrets a read-only text field indicates whether a value is currently set. Provide a new value by checking
  **Update** which makes the text field editable. While editing you can also toggle the display of typed characters.

.. note::
  Required properties are marked with an asterisk. It is is not mandatory to fill these in when providing the system's
  information but as long as required properties are missing you will not be able to launch tests.

Once you have entered the system's information click the **Save** button to record it. You can also click the **Cancel** button
to return to the previous screen without making any changes.

.. _manage_organisation__systems_edit:

Edit an existing system
~~~~~~~~~~~~~~~~~~~~~~~

To edit an existing system click its row from the listing of existing systems. Doing so results in a screen
displaying the system's information, presented in editable input fields.

.. figure:: ../screenshots/systems_update.PNG
  :align: center

You can proceed here to modify the **short name**, **full name**, **description**, **version**. At the bottom you
also see the unique **API key** for the system that can be clicked to copy it to the clipboard or refreshed to update it.
This API key can be used in case the test bed's :ref:`REST API <api>` is enabled, or for
`messaging in test cases <https://www.itb.ec.europa.eu/docs/tdl/latest/handlers/index.html#built-in-messaging-handlers>`_.

If your organisation defines other systems you can also select to **copy the test setup** from another system which will
reset the system's conformance statements to match the selected one (upon confirmation).

.. figure:: ../screenshots/systems_create_copy.PNG
  :align: center
  :scale: 70%

Once another system is selected to copy from, you are also presented with additional options to include:

* **System properties:** To also copy any additional system-level properties that the source system defines.
* **Conformance statement configurations:** To also copy any of the source system's configuration parameters set on its
  conformance statements.

If your community foresees additional system properties, and as long as you are not copying the properties from another system, you
will also see an **Additional properties** section. You can click this to expand and manage the system's properties.

.. figure:: ../screenshots/systems_update_properties.PNG
  :align: center

Configured properties can be simple texts, secret values (e.g. passwords) or files for which, if supplied by your community
administrator, you will also see a help tooltip to understand their meaning. Such properties can be managed as follows:

* For texts the current value is presented in an editable text field or dropdown menu (if the property has preset values).
* For files you can **upload** a new file, whereas if one is already set you can **download** or **delete** it.
* For secrets a read-only text field indicates whether a value is currently set, whereas to provide a new value you
  check **Update**. When providing a new value you can also toggle the display of the typed characters.

Certain properties may actually be non-editable. Such properties can only be managed by your community administrator.

.. note::
  Required properties are marked with an asterisk. It is is not mandatory to fill these in when providing the system's
  information but as long as required properties are missing you will not be able to launch tests.

Once ready click the **Update** button to finish. You may also click here the **Manage tests** button to view the system's :ref:`conformance statements <manage_your_conformance_statements>`,
or the **Delete** button which, following confirmation, will proceed to
completely delete the system. In case you choose to delete the system, the tests realised for it will still be searchable but will be presented
as obsolete (see :ref:`view_your_test_history`). Finally, you can also click the **Back** button to return to the previous screen
without making any changes.

.. _manage_organisation__rest:

Manage your REST API keys
-------------------------

Selecting the **REST API keys** tab (if available) presents you the API keys to :ref:`launch and manage test sessions via REST API<execute_tests_rest>`. This tab
may be missing if use of this REST API is not enabled by your administrator.

.. figure:: ../screenshots/organisation_manage__rest_admin.PNG
  :align: center

From this table you can view, manage and copy the keys you need to identify your organisation, the system to be tested and the target conformance statement and
tests. These API keys are listed in a table presenting per case the key to consider. For each key you may click the provided **copy** control to copy it to your
clipboard.

The keys listed include the following:

* **Organisation:** The key to identify your organisation. The readonly name of the organisation is displayed alongside the key. You are also presented here
  with **reset** and **delete** controls to replace or remove the key.
* **System:** The key to identify a specific system. If your organisation defines multiple systems these are presented in a dropdown list and selecting one
  will display its API key. The displayed key also provides a **reset** control to replace it.
* **Specification:** The target specification does not itself define an API key but you need to select one to view the API keys of its related information
  (actors, test suites and test cases). If you have conformance statements for only a single specification this appears as preselected and readonly.
* **Actor:** The key to identify the target specification's actor. The actor, along with your selected system essentially constitute your target
  :ref:`conformance statement<manage_your_conformance_statements>`. The selected specification's actors are listed in a dropdown list unless there is a single one which would appear as a readonly preset selection.
  Selecting an actor from the list displays its related API key.
* **Test suite:** The key to identify a specific test suite. Selecting a given test suite displays its relevant API key.
* **Test case:** The key to identify a specific test case within the selected test suite. Selecting a given test case displays its relevant API key.

.. note::

  The listed API keys do not include **conformance snapshots**. This is because your own administrator organisation is never included
  in snapshots.

When removing or replacing the API key of your organisation or one of its systems, you will be prompted to confirm it. If you
proceed to do so any existing automation setups you may have would need to be updated accordingly given that the previous
keys will no longer be valid.

Details on how these REST API keys are used to launch and manage test sessions are provided in :ref:`execute_tests_rest`.

.. note::

  The displayed specifications, actors, test suites and test cases are limited to those linked to your already configured :ref:`conformance statements<manage_your_conformance_statements>`.