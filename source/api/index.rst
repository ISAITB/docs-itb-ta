.. _api:

REST API
========

The test bed's REST API allows you to carry out most operations without connecting to its user interface. Its typical use case is to allow 
integration with automated processes enabling use cases such as **automated testing** and **continuous integration**. For 
test developers certain API operations may also be interesting as it allows them to more easily validate changes while **developing test cases**.

As a general note, identifying the operations' caller and referring to existing data in the test bed is done via **API keys**. For operations that would
involve choices and confirmations if done via their corresponding user interface screens, these are provided in each case as inputs of the relevant REST calls.

The REST API foresees the following types of operations:

* Management of communities, organisations and systems (see :ref:`api__community`).
* Management of configuration property definitions and values (see :ref:`api__configuration`).
* Management of domains, specification groups, specifications and actors (see :ref:`api__domains`).
* Management of conformance statements (see :ref:`api__conformance_statements`).
* Launch and management of test sessions (see :ref:`api__test_sessions`).
* Management of test suites (see :ref:`api__test_suites`).

These sets of operations are documented in the sections that follow.

.. note::

  Using the test bed's REST API is an advanced feature that needs to first be enabled by your administrator to be available to you. If setting up
  your own test bed instance (for `production`_ or `development`_) you may enable this by setting the `AUTOMATION_API_ENABLED`_ property to true
  or `through the user interface <https://www.itb.ec.europa.eu/docs/itb-ta/latest/systemAdministration/index.html#manage-configuration-settings>`_
  after switching to the test bed administrator account.

.. _api__community:

Community management
--------------------

The community management operations allow you to manage the test bed's **communities**, **organisations** and **systems**. They are useful if you want to
have processes external to the test bed manage such information without needing manual actions through the test bed's user interface. Specifically you can:

* :ref:`Create <api__community__createCommunity>`, :ref:`update <api__community__updateCommunity>` and :ref:`delete <api__community__deleteCommunity>` communities.
* :ref:`Create <api__community__createOrganisation>`, :ref:`update <api__community__updateOrganisation>` and :ref:`delete <api__community__deleteOrganisation>` organisations.
* :ref:`Create <api__community__createSystem>`, :ref:`update <api__community__updateSystem>` and :ref:`delete <api__community__deleteSystem>` systems.

All community management operations use API keys to authorise calls and determine the information to be updated. Two types of API keys are used, depending
on the operation:

* The key identifying a **community**, for all operations that a community administrator can do through the user interface.
* The **master API key**, for selected top-level operations that are normally reserved for the overall test bed administrator.

The sections that follow provide instructions and examples for each operation.

.. _api__community__createCommunity:

createCommunity
~~~~~~~~~~~~~~~

The **createCommunity** operation is used to create a new community. To use it make an HTTP ``PUT`` to path ``/api/rest/community``
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **master API key**.

In the request's body you specify the information of the new community, of which the ``shortName`` and ``fullName`` are mandatory. Other information you
would typically be providing, although not mandatory, would be the community's ``description`` and the ``domain`` it relates to, the latter identified through
the domain's API key. For the full set of information you can manage check the payload's :ref:`schema <api__community__createCommunity__request>`.

The following example shows how you can create a community with the provided data:

.. code-block:: json

  {
    "shortName": "EUPO community",
    "fullName": "European Purchase Order community",
    "description": "Community for the conformance testing of the European Purchase Order specification.",
    "supportEmail": "support@eupo.eu",
    "interactionNotifications": true,
    "domain": "3F471BA2XDD33X4FCEX8045X1D8039E6B92A"
  }

Calling this operation, the test bed will create the community and link it with the identified domain. Once complete, the operation will
respond with the community's assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a test bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "EUPO community",
    "fullName": "European Purchase Order community",
    "description": "Community for the conformance testing of the European Purchase Order specification.",
    "supportEmail": "support@eupo.eu",
    "interactionNotifications": true,
    "domain": "3F471BA2XDD33X4FCEX8045X1D8039E6B92A",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_COMMUNITY"
  }

In this case the test bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__community__createCommunity__request:

createCommunity - request schema
++++++++++++++++++++++++++++++++

The payload of the **createCommunity** operation's request is defined by the following :download:`JSON Schema<resources/community/createCommunity_request.schema.json>`:

.. literalinclude:: resources/community/createCommunity_request.schema.json
   :language: json

.. _api__community__createCommunity__response:

createCommunity - response schema
+++++++++++++++++++++++++++++++++

The payload of the **createCommunity** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json

.. _api__community__updateCommunity:

updateCommunity
~~~~~~~~~~~~~~~

The **updateCommunity** operation is used to update an existing community. It exists in two variants which differ in how the target community is 
identified, the updates that you can do, and the API key you will use for authorisation.

The first variant assumes that you are performing an update as a community administrator would. In this case you can only update your own community,
and cannot change the community's assigned domain. You call the operation by making an HTTP ``POST`` to path ``/api/rest/community`` and setting an
HTTP header named ``ITB_API_KEY`` to your **community API key**.

The second variant allows you to perform tasks reserved for the test bed administrator. This means that you can select any existing community in the
test bed, and also change or remove its assigned domain. In this case you call the operation by making an HTTP ``POST`` to path 
``/api/rest/community/{community}``, setting ``{community}`` to the target community's API key. The ``ITB_API_KEY`` HTTP header needs to be set
with the **master API key**.

When calling this operation, regardless of the specific variant, all input properties are optional. You specify the properties that you want to
update, and for the ones that are to be left unchanged you don't include them. In case you want to remove a value, for example unlinking the
community from its current domain, you would specify the property in question as an empty string.

The following example illustrates an update of the community's ``supportEmail``, leaving all other information unchanged:

.. code-block:: json

  {
    "supportEmail": "support-mailbox@eupo.eu"
  }

In case you want to altogether remove the support mailbox, you specify it's value as an empty string:

.. code-block:: json

  {
    "supportEmail": ""
  }

The full set of properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__community__updateCommunity__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__community__updateCommunity__request:

updateCommunity - request schema
++++++++++++++++++++++++++++++++

The payload of the **updateCommunity** operation's request is defined by the following :download:`JSON Schema<resources/community/updateCommunity_request.schema.json>`:

.. literalinclude:: resources/community/updateCommunity_request.schema.json
   :language: json

.. _api__community__deleteCommunity:

deleteCommunity
~~~~~~~~~~~~~~~

The **deleteCommunity** operation is used to delete an existing community. To use it make an HTTP ``DELETE`` to path ``/api/rest/community/{community}``,
setting ``{community}`` to the target community's API key. In addition, you must include in your request an HTTP header named
``ITB_API_KEY`` set to your **master API key**.

This operation takes no payload when making a request. If the target community has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__community__createOrganisation:

createOrganisation
~~~~~~~~~~~~~~~~~~

The **createOrganisation** operation is used to create a new organisation. To use it make an HTTP ``PUT`` to path ``/api/rest/organisation`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**. This API key identifies the community
within which the organisation will be created.

In the request's body you specify the information of the new organisation, of which the ``shortName`` and ``fullName`` are mandatory as defined
in the payload's :ref:`schema <api__community__createOrganisation__request>`.

The following example shows how you can create an organisation with the provided data:

.. code-block:: json

  {
    "shortName": "ACME",
    "fullName": "ACME Ltd."
  }

Calling this operation, the test bed will create the organisation and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a test bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "ACME",
    "fullName": "ACME Ltd.",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_ORGANISATION"
  }

In this case the test bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__community__createOrganisation__request:

createOrganisation - request schema
+++++++++++++++++++++++++++++++++++

The payload of the **createOrganisation** operation's request is defined by the following :download:`JSON Schema<resources/community/createOrganisation_request.schema.json>`:

.. literalinclude:: resources/community/createOrganisation_request.schema.json
   :language: json

.. _api__community__createOrganisation__response:

createOrganisation - response schema
++++++++++++++++++++++++++++++++++++

The payload of the **createOrganisation** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json

.. _api__community__updateOrganisation:

updateOrganisation
~~~~~~~~~~~~~~~~~~

The **updateOrganisation** operation is used to update an existing organisation. To use it make an HTTP ``POST`` to path ``/api/rest/organisation/{organisation}``,
setting ``{organisation}`` to the target organisation's API key. You also need to include in your request an HTTP header named ``ITB_API_KEY`` set to the
**community API key** of the community containing the organisation.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the organisation's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "ACME Limited"
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__community__updateOrganisation__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__community__updateOrganisation__request:

updateOrganisation - request schema
+++++++++++++++++++++++++++++++++++

The payload of the **updateOrganisation** operation's request is defined by the following :download:`JSON Schema<resources/community/updateOrganisation_request.schema.json>`:

.. literalinclude:: resources/community/updateOrganisation_request.schema.json
   :language: json

.. _api__community__deleteOrganisation:

deleteOrganisation
~~~~~~~~~~~~~~~~~~

The **deleteOrganisation** operation is used to delete an existing organisation. To use it make an HTTP ``DELETE`` to path ``/api/rest/organisation/{organisation}``,
setting ``{organisation}`` to the target organisation's API key. In addition, you must include in your request an HTTP header named
``ITB_API_KEY`` set to your **community API key**.

This operation takes no payload when making a request. If the target organisation has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__community__createSystem:

createSystem
~~~~~~~~~~~~

The **createSystem** operation is used to create a new system. To use it make an HTTP ``PUT`` to path ``/api/rest/system`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**. This API key identifies the community
within which the system will be created.

In the request's body you specify the information of the new system, of which the ``shortName`` and ``fullName`` are mandatory as defined
in the payload's :ref:`schema <api__community__createSystem__request>`. In addition, you must include the ``organisation`` within which
the system will be created, setting its value to the organisation's API key.

The following example shows how you can create a system under a given organisation with the provided data:

.. code-block:: json

  {
    "shortName": "PS",
    "fullName": "Purchasing system",
    "description": "ACME's flagship purchasing solution.",
    "version": "v1.0",
    "organisation": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

Calling this operation, the test bed will create the system and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "3F471BA2XDD33X4FCEX8045X1D8039E6B92A"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a test bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "PS",
    "fullName": "Purchasing system",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_SYSTEM"
  }

In this case the test bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__community__createSystem__request:

createSystem - request schema
+++++++++++++++++++++++++++++

The payload of the **createSystem** operation's request is defined by the following :download:`JSON Schema<resources/community/createSystem_request.schema.json>`:

.. literalinclude:: resources/community/createSystem_request.schema.json
   :language: json

.. _api__community__createSystem__response:

createSystem - response schema
++++++++++++++++++++++++++++++

The payload of the **createSystem** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json

.. _api__community__updateSystem:

updateSystem
~~~~~~~~~~~~

The **updateSystem** operation is used to update an existing system. To use it make an HTTP ``POST`` to path ``/api/rest/system/{system}``,
setting ``{system}`` to the target system's API key. You also need to include in your request an HTTP header named ``ITB_API_KEY`` set to the
**community API key** of the community containing the system.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to
be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of the system's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "Amazing purchasing system"
  }

In case you want to altogether remove a property, such as the the system's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__community__updateSystem__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__community__updateSystem__request:

updateSystem - request schema
+++++++++++++++++++++++++++++

The payload of the **updateSystem** operation's request is defined by the following :download:`JSON Schema<resources/community/updateSystem_request.schema.json>`:

.. literalinclude:: resources/community/updateSystem_request.schema.json
   :language: json

.. _api__community__deleteSystem:

deleteSystem
~~~~~~~~~~~~

The **deleteSystem** operation is used to delete an existing system. To use it make an HTTP ``DELETE`` to path ``/api/rest/system/{system}``,
setting ``{system}`` to the target system's API key. In addition, you must include in your request an HTTP header named
``ITB_API_KEY`` set to your **community API key**.

This operation takes no payload when making a request. If the target system has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__configuration:

Configuration management
------------------------

The test bed provides the possibility to manage configuration entries via its REST API. Two types of configuration actions are available:

* Managing the **definition** of configuration properties.
* Setting the **values** of configuration properties.

In terms of defining configuration properties you can:

* :ref:`Create <api__configuration__createDomainProperty>`, :ref:`update <api__configuration__updateDomainProperty>` and :ref:`delete <api__configuration__deleteDomainProperty>` domain properties.
* :ref:`Create <api__configuration__createOrganisationProperty>`, :ref:`update <api__configuration__updateOrganisationProperty>` and :ref:`delete <api__configuration__deleteOrganisationProperty>` organisation properties.
* :ref:`Create <api__configuration__createSystemProperty>`, :ref:`update <api__configuration__updateSystemProperty>` and :ref:`delete <api__configuration__deleteSystemProperty>` system properties.
* :ref:`Create <api__configuration__createStatementProperty>`, :ref:`update <api__configuration__updateStatementProperty>` and :ref:`delete <api__configuration__deleteStatementProperty>` conformance statement (actor) properties.

Once properties are defined you can manage their values for specific organisations and systems through the :ref:`configure <api__configuration__configure>` operation.

.. _api__configuration__configure:

configure
~~~~~~~~~

The **configure** operation allows you to adapt the values for configuration entries at all levels, specifically:

* At **domain** level, for configuration applying to the overall test configuration.
* At **organisation** level, for configuration pertinent to a specific organisation.
* At **system** level, for configuration pertinent to a specific organisation's system.
* At **statement** level, for configuration relevant to a conformance statement linking a system and specification actor.

For properties at these levels this operation allows you to **create**, **update** and **delete** values. The exception is the
creation and deletion of domain properties, for which you need to use the dedicated :ref:`createDomainProperty <api__configuration__createDomainProperty>`
and :ref:`deleteDomainProperty <api__configuration__deleteDomainProperty>` operations.

To call the **configure** operation make an HTTP ``POST`` to path ``/api/rest/configure``. To authorise the operation and identify the properties to manage,
you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you can provide any of the following properties depending on what configuration you want to update:

* ``domainProperties`` as an array of ``key`` and ``value`` pairs. In case the domain of the property cannot be determined you can also
  set ``domain`` with the relevant domain's API key.
* ``organisationProperties`` as an array where each item defines the relevant ``organisation`` API key followed by an array of ``key`` and ``value`` pairs.
* ``systemProperties`` as an array where each item defines the relevant ``system`` API key followed by an array of ``key`` and ``value`` pairs.
* ``statementProperties`` as an array where each item defines the relevant ``system`` and ``actor`` API keys followed by an array of ``key`` and ``value`` pairs.

The above properties are optional, allowing you to specify precisely what you want to update. Regarding the ``key`` and ``value`` pairs, the ``key`` always
refers to the unique identifier of the property in question (the same as what is used to refer to it in test cases), for which the provided ``value`` will be
applied. The specific action to take place is determined as follows:

* If ``value`` is provided, the property will be updated or created if not existing.
* If ``value`` is not provided and an existing value is defined it will be deleted.

Recall that in the case of domain properties, only updates of existing properties are allowed to take place through this operation. In addition, only properties that are simple text
values can be managed via the API.

The following sample is a JSON request to update a property at each configuration level.

.. code-block:: json

  {
    "domainProperties": [
      { "key": "sampleProperty", "value": "newValue" }
    ],
    "organisationProperties": [
      {
        "organisation": "ORGANISATION_API_KEY",
        "properties": [
          { "key": "sampleProperty", "value": "newValue" }
        ]
      }
    ],
    "systemProperties": [
      {
        "system": "SYSTEM_API_KEY",
        "properties": [
          { "key": "sampleProperty", "value": "newValue" }
        ]
      }
    ],
    "statementProperties": [
      {
        "system": "SYSTEM_API_KEY",
        "actor": "ACTOR_API_KEY",
        "properties": [
          { "key": "sampleProperty", "value": "newValue" }
        ]
      }
    ]
  }

As mentioned previously you can also focus on specific properties and update multiple in one go. The following sample updates two organisation properties for
two different organisations.

.. code-block:: json

  {
    "organisationProperties": [
      {
        "organisation": "ORGANISATION_API_KEY_1",
        "properties": [
          { "key": "sampleProperty1", "value": "newValue1" },
          { "key": "sampleProperty2", "value": "newValue2" }
        ]
      },
      {
        "organisation": "ORGANISATION_API_KEY_2",
        "properties": [
          { "key": "sampleProperty1", "value": "newValue1" },
          { "key": "sampleProperty2", "value": "newValue2" }
        ]
      }
    ]
  }

To delete properties, simply identify the properties in question and omit the ``value``.

.. code-block:: json

  {
    "organisationProperties": [
      {
        "organisation": "ORGANISATION_API_KEY",
        "properties": [
          { "key": "sampleProperty1" },
          { "key": "sampleProperty2" }
        ]
      }
    ]
  }

Once the **configure** operation has completed you will receive a JSON response providing feedback on the result. If all actions could be carried out the payload
will be en empty JSON object. In case warnings were encountered (for example an organisation not being found, or a target property not being a simple text value),
these will be reported in a string array named ``messages``.

.. code-block:: json

  {
    "messages": [
      "No conformance statement defined for system [SYSTEM_API_KEY] and actor [ACTOR_API_KEY]."
    ]
  }

.. _api__configuration__configure__request:

configure - request schema
++++++++++++++++++++++++++

The payload of the **configure** operation's request is defined by the following :download:`JSON Schema<resources/configuration/configure_request.schema.json>`:

.. literalinclude:: resources/configuration/configure_request.schema.json
   :language: json

.. _api__configuration__configure__response:

configure - response schema
+++++++++++++++++++++++++++

The payload of the **configure** operation's response is defined by the following :download:`JSON Schema<resources/configuration/configure_response.schema.json>`:

.. literalinclude:: resources/configuration/configure_response.schema.json
   :language: json

.. _api__configuration__createDomainProperty:

createDomainProperty
~~~~~~~~~~~~~~~~~~~~

The **createDomainProperty** operation is used to define a new domain property. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/domain`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the domain property, of which the ``key`` and ``value`` are mandatory as defined
in the payload's :ref:`schema <api__configuration__createDomainProperty__request>`. In case the target domain cannot be determined by the community
linked to the provided ``ITB_API_KEY``, you also need to specify the ``domain`` property, set with the API key of the target domain.

The following example shows how you can create a domain property with the provided data:

.. code-block:: json

  {
    "key": "validationService",
    "value": "http://test-services/services/validation?wsdl",
    "description": "The WSDL address of the validation service used in test cases."
  }

Calling this operation, the test bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createDomainProperty__request:

createDomainProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **createDomainProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/createDomainProperty_request.schema.json>`:

.. literalinclude:: resources/configuration/createDomainProperty_request.schema.json
   :language: json

.. _api__configuration__updateDomainProperty:

updateDomainProperty
~~~~~~~~~~~~~~~~~~~~

The **updateDomainProperty** operation is used to update the definition of a domain property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/domain``
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

.. note::
  Updating the value of domain properties can also be achieved using the :ref:`configure <api__configuration__configure>` operation.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. In addition, providing ``domain``
and setting it with a domain API key might be needed, in case the relevant domain cannot be determined. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a domain property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "validationService",
    "description": "The validation service address."
  }

In case you want to altogether remove a value, you specify it as an empty string:

.. code-block:: json

  {
    "key": "validationService",
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateDomainProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateDomainProperty__request:

updateDomainProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **updateDomainProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/updateDomainProperty_request.schema.json>`:

.. literalinclude:: resources/configuration/updateDomainProperty_request.schema.json
   :language: json

.. _api__configuration__deleteDomainProperty:

deleteDomainProperty
~~~~~~~~~~~~~~~~~~~~

The **deleteDomainProperty** operation is used to delete the definition of a domain property. To use it make an HTTP ``DELETE`` to path ``/api/rest/configure/domain/{parameter}``,
setting ``{parameter}`` to the target property's key. In addition, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In case the provided community API key identifies a community without a linked domain, you also need to identify the target domain. This is done by adapting the operation's path to
``/api/rest/configure/domain/{domain}/{parameter}`` where the additional ``{domain}`` placeholder is set with the target domain's API key.

This operation takes no payload when making a request. If the target property has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__configuration__createOrganisationProperty:

createOrganisationProperty
~~~~~~~~~~~~~~~~~~~~~~~~~~

The **createOrganisationProperty** operation is used to define a new organisation property for a community. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/organisation`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's body you specify the information of the organisation property, of which the ``key`` is mandatory. The full set of information you can set for the property is defined
in the payload's :ref:`schema <api__configuration__createOrganisationProperty__request>`.

The following example shows how you can create an organisation property with the provided data:

.. code-block:: json

  {
    "key": "vatNumber",
    "name": "VAT number",
    "description": "The VAT number of the supplier.",
    "required": true,
    "editableByUsers": true,
    "inTests": true
  }

Other more advanced options include specifying the property's allowed values, default value, and dependencies. In the latter case, ``dependsOn`` is set with the key of the property
that the current one depends upon:

.. code-block:: json

  {
    "key": "vatType",
    "name": "VAT regime",
    "description": "The VAT regime the suppler is subject to.",
    "required": true,
    "editableByUsers": true,
    "inTests": true,
    "allowedValues": [
      { "value": "full", "label": "Full regime" },
      { "value": "minimal", "label": "Minimal regime" },
      { "value": "none", "label": "Exempt" }
    ],
    "defaultValue": "full",
    "dependsOn": "considerTax",
    "dependsOnValue": "Y"
  }

Calling this operation, the test bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createOrganisationProperty__request:

createOrganisationProperty - request schema
+++++++++++++++++++++++++++++++++++++++++++

The payload of the **createOrganisationProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/organisationPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/organisationPropertyInfo_request.schema.json
   :language: json

.. _api__configuration__updateOrganisationProperty:

updateOrganisationProperty
~~~~~~~~~~~~~~~~~~~~~~~~~~

The **updateOrganisationProperty** operation is used to update the definition of an organisation property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/organisation``
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of an organisation property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "vatType",
    "description": "The VAT regime to apply."
  }

In case you want to altogether remove a value, you specify it as an empty string or array (depending on its type):

.. code-block:: json

  {
    "key": "vatType",
    "allowedValues": [],
    "defaultValue": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateOrganisationProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateOrganisationProperty__request:

updateOrganisationProperty - request schema
+++++++++++++++++++++++++++++++++++++++++++

The payload of the **updateOrganisationProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/organisationPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/organisationPropertyInfo_request.schema.json
   :language: json

.. _api__configuration__deleteOrganisationProperty:

deleteOrganisationProperty
~~~~~~~~~~~~~~~~~~~~~~~~~~

The **deleteOrganisationProperty** operation is used to delete the definition of an organisation property. To use it make an HTTP ``DELETE`` to path ``/api/rest/configure/organisation/{property}``,
setting ``{property}`` to the target property's key. In addition, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

This operation takes no payload when making a request. If the target property has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__configuration__createSystemProperty:

createSystemProperty
~~~~~~~~~~~~~~~~~~~~

The **createSystemProperty** operation is used to define a new system property for a community. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/system`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's body you specify the information of the system property, of which the ``key`` is mandatory. The full set of information you can set for the property is defined
in the payload's :ref:`schema <api__configuration__createSystemProperty__request>`.

The following example shows how you can create an organisation property with the provided data:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "name": "API endpoint",
    "description": "The API endpoint to send messages to.",
    "required": true,
    "editableByUsers": true,
    "inTests": true
  }

Other more advanced options include specifying the property's allowed values, default value, and dependencies. In the latter case, ``dependsOn`` is set with the key of the property
that the current one depends upon:

.. code-block:: json

  {
    "key": "encrypt",
    "name": "Encrypted endpoint",
    "description": "Whether the provided endpoint is encrypted.",
    "required": true,
    "editableByUsers": true,
    "inTests": true,
    "allowedValues": [
      { "value": "Y", "label": "Yes" },
      { "value": "N", "label": "No" }
    ],
    "defaultValue": "Y",
    "dependsOn": "apiEndpoint"
  }

Calling this operation, the test bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createSystemProperty__request:

createSystemProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **createSystemProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/systemPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/systemPropertyInfo_request.schema.json
   :language: json

.. _api__configuration__updateSystemProperty:

updateSystemProperty
~~~~~~~~~~~~~~~~~~~~

The **updateSystemProperty** operation is used to update the definition of a system property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/system``
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a system property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "description": "The API endpoint root."
  }

In case you want to altogether remove a value, you specify it as an empty string or array (depending on its type):

.. code-block:: json

  {
    "key": "encrypt",
    "allowedValues": [],
    "defaultValue": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateSystemProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateSystemProperty__request:

updateSystemProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **updateSystemProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/systemPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/systemPropertyInfo_request.schema.json
   :language: json

.. _api__configuration__deleteSystemProperty:

deleteSystemProperty
~~~~~~~~~~~~~~~~~~~~

The **deleteSystemProperty** operation is used to delete the definition of a system property. To use it make an HTTP ``DELETE`` to path ``/api/rest/configure/system/{property}``,
setting ``{property}`` to the target property's key. In addition, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

This operation takes no payload when making a request. If the target property has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__configuration__createStatementProperty:

createStatementProperty
~~~~~~~~~~~~~~~~~~~~~~~

The **createStatementProperty** operation is used to define a new conformance statement (actor) property for a community. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/actor/{actor}``,
setting ``{actor}`` with the API key of the target specification actor. In addition, you need to include in your request an HTTP header named ``ITB_API_KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the conformance statement property, of which the ``key`` is mandatory. The full set of information you can set for the property is defined
in the payload's :ref:`schema <api__configuration__createStatementProperty__request>`.

The following example shows how you can create a conformance statement property with the provided data:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "name": "API endpoint",
    "description": "The API endpoint to send messages to.",
    "required": true,
    "editableByUsers": true,
    "inTests": true
  }

Other more advanced options include specifying the property's allowed values, default value, and dependencies. In the latter case, ``dependsOn`` is set with the key of the property
that the current one depends upon:

.. code-block:: json

  {
    "key": "encrypt",
    "name": "Encrypted endpoint",
    "description": "Whether the provided endpoint is encrypted.",
    "required": true,
    "editableByUsers": true,
    "inTests": true,
    "allowedValues": [
      { "value": "Y", "label": "Yes" },
      { "value": "N", "label": "No" }
    ],
    "defaultValue": "Y",
    "dependsOn": "apiEndpoint"
  }

Calling this operation, the test bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createStatementProperty__request:

createStatementProperty - request schema
++++++++++++++++++++++++++++++++++++++++

The payload of the **createStatementProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/statementPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/statementPropertyInfo_request.schema.json
   :language: json

.. _api__configuration__updateStatementProperty:

updateStatementProperty
~~~~~~~~~~~~~~~~~~~~~~~

The **updateStatementProperty** operation is used to update the definition of a conformance statement (actor) property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/actor``,
setting ``{actor}`` with the API key of the target specification actor. In addition, you need to include in your request an HTTP header named ``ITB_API_KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a conformance statement property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "description": "The API endpoint root."
  }

In case you want to altogether remove a value, you specify it as an empty string or array (depending on its type):

.. code-block:: json

  {
    "key": "encrypt",
    "allowedValues": [],
    "defaultValue": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateSystemProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateStatementProperty__request:

updateStatementProperty - request schema
++++++++++++++++++++++++++++++++++++++++

The payload of the **updateStatementProperty** operation's request is defined by the following :download:`JSON Schema<resources/configuration/statementPropertyInfo_request.schema.json>`:

.. literalinclude:: resources/configuration/statementPropertyInfo_request.schema.json
   :language: json

.. _api__configuration__deleteStatementProperty:

deleteStatementProperty
~~~~~~~~~~~~~~~~~~~~~~~

The **deleteStatementProperty** operation is used to delete the definition of a conformance statement (actor) property. To use it make an HTTP ``DELETE`` to path ``/api/rest/configure/actor/{actor}/{property}``,
setting ``{actor}`` with the API key of the target specification actor, and ``{property}`` with the target property's key. In addition,
you must include in your request an HTTP header named ``ITB_API_KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

This operation takes no payload when making a request. If the target property has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__conformance_statements:

Conformance statement management
--------------------------------

You can use the test bed's REST API to manage an organisation's **conformance statements**. The following operations are provided:

* :ref:`api__conformance_statements__create`: Create a conformance statement linking an organisation's system with a specification actor.
* :ref:`api__conformance_statements__delete`: Delete an organisation's conformance statement.
* :ref:`api__conformance_statements__report`: Produce a conformance statement report for a given conformance statement.

Details on each operation, including sample requests and responses, are provided in the following sections.

.. _api__conformance_statements__create:

create
~~~~~~

The **create** operation is used to create a conformance statement for an organisation, linking one of its systems with a specification
actor. To call the operation make an HTTP ``PUT`` to path ``/api/rest/conformance/{system}/{actor}`` setting the path placeholders as follows:

* For ``{system}`` use the API key of the system you want to create the statement for.
* For ``{actor}`` use the API key of the specification actor.

In addition, you must include in your request an HTTP header named ``ITB_API_KEY`` set with the **organisation's API key**. Finally, note that
this operation does not take a body.

As an example, if we want to create a conformance statement linking a system and actor with API keys ``SYSTEM123`` and ``ACTOR456`` you
would make a ``PUT`` to ``/api/rest/conformance/SYSTEM123/ACTOR456``. In terms of response, if the conformance statement was successfully
created you will receive a ``200`` response with no body.

.. _api__conformance_statements__delete:

delete
~~~~~~

The **delete** operation is used to delete an organisation's conformance statement. To call the operation make an HTTP ``DELETE``
to path ``/api/rest/conformance/{system}/{actor}`` setting the path placeholders as follows:

* For ``{system}`` use the API key of the system that is currently linked to the statement.
* For ``{actor}`` use the API key of the relevant specification actor.

In addition, you must include in your request an HTTP header named ``ITB_API_KEY`` set with the **organisation's API key**.

As an example, if we want to delete a conformance statement that currently links a system and actor with API keys ``SYSTEM123`` and ``ACTOR456``
you would make a ``DELETE`` to ``/api/rest/conformance/SYSTEM123/ACTOR456``. In terms of response, if the conformance statement was successfully
removed you will receive a ``200`` response with no body.

.. _api__conformance_statements__report:

report
~~~~~~

The **report** operation is used to produce a conformance statement report. To use it make an HTTP ``GET`` to path ``/api/rest/conformance/{system}/{actor}`` setting the path placeholders as follows:

* For ``{system}`` use the API key of the system linked to the statement.
* For ``{actor}`` use the API key of the relevant specification actor.

By default the format of the returned report will be XML, expressed in the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__.
You can also request a PDF report by specifying the ``Accept`` HTTP header as ``application/pdf``. In addition, you must include in your request an additional 
HTTP header named ``ITB_API_KEY`` set with the **organisation's API key**.

Once this call is made, the test bed will return a response with a ``200`` status code, whose payload is the report’s content.
The following sample is a complete example of such a report (in the default XML format):

.. literalinclude:: ../manageConformanceStatements/resources/conformance_statement_xml.xml
   :language: xml

.. _api__domains:

Domain management
-----------------

The domain management operations allow you to manage the test bed's **domains**, **specification groups**, **specifications** and **actors**. They are useful if you want to
have processes external to the test bed manage such information without needing manual actions through the test bed's user interface. Specifically you can:

* :ref:`Create <api__domain__createDomain>`, :ref:`update <api__domain__updateDomain>` and :ref:`delete <api__domain__deleteDomain>` domains.
* :ref:`Create <api__domain__createSpecificationGroup>`, :ref:`update <api__domain__updateSpecificationGroup>` and :ref:`delete <api__domain__deleteSpecificationGroup>` specification groups.
* :ref:`Create <api__domain__createSpecification>`, :ref:`update <api__domain__updateSpecification>` and :ref:`delete <api__domain__deleteSpecification>` specifications.
* :ref:`Create <api__domain__createActor>`, :ref:`update <api__domain__updateActor>` and :ref:`delete <api__domain__deleteActor>` actors.

All domain management operations use API keys to authorise calls and determine the information to be updated. Two types of API keys are used, depending
on the operation:

* The key identifying a **community**, for all operations that a community administrator can do through the user interface.
* The **master API key**, for selected top-level operations that are normally reserved for the overall test bed administrator.

The sections that follow provide instructions and examples for each operation.

.. _api__domain__createDomain:

createDomain
~~~~~~~~~~~~

The **createDomain** operation is used to create a new domain. To use it make an HTTP ``PUT`` to path ``/api/rest/domain``
and include in your request an HTTP header named ``ITB_API_KEY`` set to your **master API key**.

In the request's body you specify the information of the new domain, of which the ``shortName`` and ``fullName`` are mandatory. Other information you
could provide, although not mandatory, would be the domain's ``description`` and custom ``reportMetadata`` for XML reports. 
For the full set of information you can manage check the payload's :ref:`schema <api__domain__createDomain__request>`.

The following example shows how you can create a domain with the provided data:

.. code-block:: json

  {
    "shortName": "EUPO",
    "fullName": "European Purchase Order",
    "description": "The European Purchase Order specifications defining the exchange of purchase orders in the EU."
  }

Calling this operation, the test bed will create the domain and respond with the domain's assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a test bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "EUPO",
    "fullName": "European Purchase Order",
    "description": "The European Purchase Order specifications defining the exchange of purchase orders in the EU.",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_DOMAIN"
  }

In this case the test bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createDomain__request:

createDomain - request schema
+++++++++++++++++++++++++++++

The payload of the **createDomain** operation's request is defined by the following :download:`JSON Schema<resources/domain/createDomain_request.schema.json>`:

.. literalinclude:: resources/domain/createDomain_request.schema.json
   :language: json

.. _api__domain__createDomain__response:

createDomain - response schema
++++++++++++++++++++++++++++++

The payload of the **createDomain** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json

.. _api__domain__updateDomain:

updateDomain
~~~~~~~~~~~~

The **updateDomain** operation is used to update an existing domain. It exists in two variants which differ in how the target domain is 
identified, the updates that you can do, and the API key you will use for authorisation.

The first variant assumes that you are performing an update as a community administrator would. In this case you can update the domain linked
to the community or any domain, in case the community is not linked to a specific one. The operation is called by making an HTTP ``POST`` to
path ``/api/rest/domain`` and setting an HTTP header named ``ITB_API_KEY`` to your **community API key**.

The second variant allows you to perform tasks reserved for the test bed administrator. This means that you can manage any domain within the
test bed regardless of the communities linked to it. In this case you call the operation by making an HTTP ``POST`` to path 
``/api/rest/domain/{domain}``, setting ``{domain}`` to the target domain's API key. The ``ITB_API_KEY`` HTTP header needs to be set
with the **master API key**.

When calling this operation, regardless of the specific variant, all input properties are optional. You specify the properties that you want to
update, and for the ones that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property
in question as an empty string.

The following example illustrates an update of the domain's ``description``, leaving all other information unchanged:

.. code-block:: json

  {
    "description": "The set of EUPO specifications."
  }

In case you want to altogether remove the description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateDomain__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateDomain__request:

updateDomain - request schema
+++++++++++++++++++++++++++++

The payload of the **updateDomain** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateDomain_request.schema.json>`:

.. literalinclude:: resources/domain/updateDomain_request.schema.json
   :language: json

.. _api__domain__deleteDomain:

deleteDomain
~~~~~~~~~~~~

The **deleteDomain** operation is used to delete an existing domain. To use it make an HTTP ``DELETE`` to path ``/api/rest/domain/{domain}``,
setting ``{domain}`` to the target domain's API key. In addition, you must include in your request an HTTP header named
``ITB_API_KEY`` set to your **master API key**.

This operation takes no payload when making a request. If the target domain has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__domain__createSpecificationGroup:

createSpecificationGroup
~~~~~~~~~~~~~~~~~~~~~~~~

The **createSpecificationGroup** operation is used to create a new specification group. To use it make an HTTP ``PUT`` to path ``/api/rest/group`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to a **community API key**. This API key identifies the community
that is able to manage the group's domain, either by being directly linked to it or being linked to no domain.

In the request's body you specify the information of the new specification group, of which the ``shortName`` and ``fullName`` are mandatory as defined
in the payload's :ref:`schema <api__domain__createSpecificationGroup__request>`. In case the community identified by the ``ITB_API_KEY`` header
is not linked to a specific domain, you will need to also specify the ``domain`` property with the target domain's API key.

The following example shows how you can create a specification group with the provided data:

.. code-block:: json

  {
    "shortName": "Data package",
    "fullName": "Data package specification"
  }

Calling this operation, the test bed will create the specification group and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a test bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "Data package",
    "fullName": "Data package specification",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_GROUP"
  }

In this case the test bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createSpecificationGroup__request:

createSpecificationGroup - request schema
+++++++++++++++++++++++++++++++++++++++++

The payload of the **createSpecificationGroup** operation's request is defined by the following :download:`JSON Schema<resources/domain/createSpecificationGroup_request.schema.json>`:

.. literalinclude:: resources/domain/createSpecificationGroup_request.schema.json
   :language: json

.. _api__domain__createSpecificationGroup__response:

createSpecificationGroup - response schema
++++++++++++++++++++++++++++++++++++++++++

The payload of the **createSpecificationGroup** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json

.. _api__domain__updateSpecificationGroup:

updateSpecificationGroup
~~~~~~~~~~~~~~~~~~~~~~~~

The **updateSpecificationGroup** operation is used to update an existing specification group. To use it make an HTTP ``POST`` to path ``/api/rest/group/{group}``,
setting ``{group}`` to the target specification group's API key. You also need to include in your request an HTTP header named ``ITB_API_KEY``
set to a **community API key**. This API key identifies the community that is able to manage the group's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the specification group's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "Amazing data package specification"
  }

In case you want to altogether remove a property, such as the the group's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateSpecificationGroup__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateSpecificationGroup__request:

updateSpecificationGroup - request schema
+++++++++++++++++++++++++++++++++++++++++

The payload of the **updateSpecificationGroup** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateSpecificationGroup_request.schema.json>`:

.. literalinclude:: resources/domain/updateSpecificationGroup_request.schema.json
   :language: json

.. _api__domain__deleteSpecificationGroup:

deleteSpecificationGroup
~~~~~~~~~~~~~~~~~~~~~~~~

The **deleteSpecificationGroup** operation is used to delete an existing specification group. To use it make an HTTP ``DELETE`` to path ``/api/rest/group/{group}``,
setting ``{group}`` to the target specification group's API key. In addition, you must include in your request an HTTP header named
``ITB_API_KEY`` set to a **community API key**. This API key identifies the community that is able to manage the group's domain, either by
being directly linked to it or being linked to no domain.

This operation takes no payload when making a request. If the target specification group has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__domain__createSpecification:

createSpecification
~~~~~~~~~~~~~~~~~~~

The **createSpecification** operation is used to create a new specification. To use it make an HTTP ``PUT`` to path ``/api/rest/specification`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to a **community API key**. This API key identifies the community
that is able to manage the specification's domain, either by being directly linked to it or being linked to no domain.

In the request's body you specify the information of the new specification, of which the ``shortName`` and ``fullName`` are mandatory as defined
in the payload's :ref:`schema <api__domain__createSpecification__request>`. In case the community identified by the ``ITB_API_KEY`` header
is not linked to a specific domain, you will need to also specify the ``domain`` property with the target domain's API key. Finally, if you
want to place the specification within a specification group, you may also include the ``group`` property set with the group's API key.

The following example shows how you can create a specification with the provided data:

.. code-block:: json

  {
    "shortName": "Create order",
    "fullName": "Create order specification"
  }

In case you use specification groups you could also have referred to the group within which to place this specification:

.. code-block:: json

  {
    "shortName": "v1.0",
    "fullName": "Version 1.0",
    "group": "C48CD2F7XB02FX45B5XB483X6DE1294C9F00"
  }

Calling this operation, the test bed will create the specification and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a test bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "Create order",
    "fullName": "Create order specification",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_SPECIFICATION"
  }

In this case the test bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createSpecification__request:

createSpecification - request schema
++++++++++++++++++++++++++++++++++++

The payload of the **createSpecification** operation's request is defined by the following :download:`JSON Schema<resources/domain/createSpecification_request.schema.json>`:

.. literalinclude:: resources/domain/createSpecification_request.schema.json
   :language: json

.. _api__domain__createSpecification__response:

createSpecification - response schema
+++++++++++++++++++++++++++++++++++++

The payload of the **createSpecification** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json

.. _api__domain__updateSpecification:

updateSpecification
~~~~~~~~~~~~~~~~~~~

The **updateSpecification** operation is used to update an existing specification. To use it make an HTTP ``POST`` to path ``/api/rest/specification/{specification}``,
setting ``{specification}`` to the target specification's API key. You also need to include in your request an HTTP header named ``ITB_API_KEY``
set to a **community API key**. This API key identifies the community that is able to manage the specification's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the specification's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "Order creation specification"
  }

In case you want to altogether remove a property, such as the the specification's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

You can also use this operation to manage the specification's grouping. Setting the ``group`` property to a specification group's API key
will place it within the target group, removing it from its previous group (if defined). If you simply want to remove the specification 
from its current group you can specify the ``group`` property as an empty string:

.. code-block:: json

  {
    "group": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateSpecification__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateSpecification__request:

updateSpecification - request schema
++++++++++++++++++++++++++++++++++++

The payload of the **updateSpecification** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateSpecification_request.schema.json>`:

.. literalinclude:: resources/domain/updateSpecification_request.schema.json
   :language: json

.. _api__domain__deleteSpecification:

deleteSpecification
~~~~~~~~~~~~~~~~~~~

The **deleteSpecification** operation is used to delete an existing specification. To use it make an HTTP ``DELETE`` to path ``/api/rest/specification/{specification}``,
setting ``{specification}`` to the target specification's API key. In addition, you must include in your request an HTTP header named
``ITB_API_KEY`` set to a **community API key**. This API key identifies the community that is able to manage the specification's domain, either by
being directly linked to it or being linked to no domain.

This operation takes no payload when making a request. If the target specification has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__domain__createActor:

createActor
~~~~~~~~~~~

The **createActor** operation is used to create a new actor. To use it make an HTTP ``PUT`` to path ``/api/rest/actor`` 
and include in your request an HTTP header named ``ITB_API_KEY`` set to a **community API key**. This API key identifies the community
that is able to manage the actor's domain, either by being directly linked to it or being linked to no domain.

In the request's body you specify the information of the new actor, of which the ``identifier``, ``name`` and ``specification`` are mandatory as defined
in the payload's :ref:`schema <api__domain__createActor__request>`. The ``specification`` property identifies the specification
under which the actor is to be created, and needs to be set with the specification's API key.

The following example shows how you can create an actor with the provided data:

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "specification": "1A748C4DXBFD6X4FD3XA196X969D9B695244"
  }

Calling this operation, the test bed will create the actor and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a test bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "specification": "1A748C4DXBFD6X4FD3XA196X969D9B695244",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_ACTOR"
  }

In this case the test bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createActor__request:

createActor - request schema
++++++++++++++++++++++++++++

The payload of the **createActor** operation's request is defined by the following :download:`JSON Schema<resources/domain/createActor_request.schema.json>`:

.. literalinclude:: resources/domain/createActor_request.schema.json
   :language: json

.. _api__domain__createActor__response:

createActor - response schema
+++++++++++++++++++++++++++++

The payload of the **createActor** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json

.. _api__domain__updateActor:

updateActor
~~~~~~~~~~~

The **updateActor** operation is used to update an existing actor. To use it make an HTTP ``POST`` to path ``/api/rest/actor/{actor}``,
setting ``{actor}`` to the target actor's API key. You also need to include in your request an HTTP header named ``ITB_API_KEY``
set to a **community API key**. This API key identifies the community that is able to manage the actor's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the actor's ``name``, leaving other information unchanged:

.. code-block:: json

  {
    "name": "Order supplier"
  }

In case you want to altogether remove a property, such as the the actor's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateActor__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateActor__request:

updateActor - request schema
++++++++++++++++++++++++++++

The payload of the **updateActor** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateActor_request.schema.json>`:

.. literalinclude:: resources/domain/updateActor_request.schema.json
   :language: json

.. _api__domain__deleteActor:

deleteActor
~~~~~~~~~~~

The **deleteActor** operation is used to delete an existing actor. To use it make an HTTP ``DELETE`` to path ``/api/rest/actor/{actor}``,
setting ``{actor}`` to the target actor's API key. In addition, you must include in your request an HTTP header named
``ITB_API_KEY`` set to a **community API key**. This API key identifies the community that is able to manage the actor's domain, either by
being directly linked to it or being linked to no domain.

This operation takes no payload when making a request. If the target actor has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.

.. _api__test_sessions:

Test session management
-----------------------

Apart from launching tests through the user interface you may also launch, manage and report on test sessions using REST API calls. A typical scenario would 
be to do so as part of a development or quality assurance workflow that would involve the following steps:

1. Upon changes to your system, or at given intervals, deploy and initialise the latest version of your system.
2. Once your system is ready, use the test bed's REST API to launch a series of test sessions for your system.
3. Have your system proceed, via scripting or responding to test bed requests, to complete the launched test sessions.
4. Monitor the progress of the launched test sessions by periodically polling the test bed for updates.
5. Once all test sessions are complete, compile an overview report and shut down your system.

All test session management operations identify relevant data via API keys that are :ref:`managed as part of the organisation's details<manage_organisation__rest>`.
API keys are defined to cover the following information:

* **Organisation:** The key to identify the specific organisation for which test sessions will be launched or managed.
* **System:** The key to determine the system for which new test sessions are to be launched.
* **Actor:** The key to determine the target specification actor for which to test conformance. Recall that the combination of system and actor
  essentially define a :ref:`conformance statement<manage_your_conformance_statements>`.
* **Test suite:** The key to determine a specific test suite.
* **Test case:** The key to determine a specific test case.

Three operations are made available that allow you to launch, monitor and manage test sessions:

* :ref:`start<api__test_sessions__start>`: Launch one or more test sessions relevant to a given conformance statement.
* :ref:`status<api__test_sessions__status>`: Query the status of one or more test sessions.
* :ref:`stop<api__test_sessions__stop>`: Stop one or more test sessions.

All these operations are HTTP calls that include the following:

* A HTTP header named ``ITB_API_KEY`` set with the **organisation API key**. This header is required to authenticate the request.
* A **JSON payload** provided as the body of the request to determine the parameters of the requested action.

Details on each operation, including sample requests and responses, are provided in the following sections.

.. _api__test_sessions__start:

start
~~~~~

The **start** operation is used to launch one or more test sessions. You may use the operation's parameters to specify exactly which test cases
to execute, allowing for targetted choices or batch execution of complete sets of tests. You may also define how the selected test cases are 
launched, by specifying whether they should be parallelised or executed in sequence. In addition, you may provide inputs for the tests to execute
that could serve to replace values that would be otherwise provided interactively (e.g. user inputs or uploaded files).

To call the **start** operation make an HTTP ``POST`` to path ``/api/rest/tests/start``. As with all test bed REST operations for session
management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

In the request's payload you typically define at least the following properties:

* The ``system``, referring to the API key of the system to be tested. This can be skipped in case the target organisation defines a single system.
* The ``actor``, referring to the API key for the target actor. This can be skipped in case you prefer providing test suite and/or test case identifiers
  to match the target actor. In any case a single conformance statement must be matched based on the provided inputs.

The operation supports properties ``testSuite`` and ``testCase``, both provided as arrays including the API keys for specific test suites
and test cases. These properties, in combination with the ``actor``, define which test cases shall be executed.
For example the following request defines only the ``actor``, thus launching all test cases defined in the system's 
:ref:`conformance statement<manage_your_conformance_statements__view_a_conformance_statements_details__tests>`:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7"
  }

Including in addition the ``testSuite`` property will instruct the test bed to launch the test cases defined in that specific test suite(s):

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "testSuite": [ "TS1" ]
  }

If you want to launch only one or more specific test cases you can use the ``testCase`` property:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "testCase": [ "TS1_TC1", "TS1_TC2" ]
  }

Apart from selecting the test cases to launch, you may also specify property ``forceSequentialExecution`` to inform the test bed how the
test sessions should be launched. Setting this to ``true`` will force the test bed to launch all tests sequentially. By default, this is
considered as ``false``, meaning that the test bed will launch all test sessions in parallel, unless certain of the selected test cases
require sequential execution.

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "forceSequentialExecution": true
  }

By default the ``start`` call  immediately returns after having launched its test sessions. In case you need to take certain actions only
**once the launched test sessions are completed**, you can set the ``waitForCompletion`` flag to ``true``. Doing so the test bed will monitor the
status of the launched sessions, and will produce a response only once all of them are completed. To avoid pending indefinitely for long-running
sessions, the test bed will wait by default for 30 seconds, however you can override this by using the ``maximumWaitTime`` parameter and
specifying the number of milliseconds to consider as the maximum wait time. The response to the ``start`` operation that included such
monitoring will also include in the response a ``completed`` boolean flag per test session to inform the caller on whether the session was known
to have completed.

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "waitForCompletion": true,
    "maximumWaitTime": 60000
  }

.. note::
  **Using the REST API in scripting:** When using scripts or automation processes to trigger tests, using ``waitForCompletion`` can greatly simplify
  your implementation, as you can know when sessions complete without using polling.

As a complement to the specifying which tests are to be launched and how, you may also provide one or more **inputs** for the selected test cases.
These inputs will be added to the test session context before executing each test, overriding any variables defined with default values.
Providing inputs can be very useful allowing you to execute tests that would otherwise require user interactions (which in this case will be skipped).

.. note::
    **Declaring input variables in test cases:** If you design your test cases based on REST API inputs you will also
    need to declare the inputs as `test case variables <https://www.itb.ec.europa.eu/docs/tdl/latest/testcase/index.html#variables>`__.

The inputs provided can be done so in a flexible manner, defining each input (e.g. a text or even a file) once and mapping it to the test cases
for which it should be considered. To do this you use the ``inputMapping`` property, an array with one item per input, complemented by the
information on the test cases to apply it to. Regarding this test case mapping, you may specify property ``testSuite`` to map it to the tests
of certain test suites, property ``testCase`` to map it to certain test cases, or skip these altogether to apply it to all tests.

For example, the following request defines an input named "countryCode" that applies to all test cases, and a second input named "partyId" that
only applies to two specific ones:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "inputMapping": [
      { 
        "input": { 
          "name": "countryCode",
          "value": "BE" 
        } 
      },
      { 
        "testCase": ["TS1_TC1", "TS1_TC2"], 
        "input": {
          "name": "partyId",
          "value": "ID12345"
        }
      }
    ]    
  }

The definition of each ``input`` property is quite flexible, allowing you to define complete files as well as complex structures such as maps.
To define a file you would including its content as a Base64-encoded string, setting appropriately the ``embeddingMethod`` and ``type`` properties
on its relevant input:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "inputMapping": [
      {
        "testCase": ["TS1_TC1"],
        "input": { 
          "name": "aFile",
          "embeddingMethod": "BASE64",
          "type": "binary",
          "value": "ZGY6TEtNZmRzYSdrZ2ptZmdobDthZyBcb2VrZ2hhc......"
        } 
      }
    ]    
  }

When providing a map as an input you do so by including its entries within the top-level map input, in its ``item`` property:


.. code-block:: json

 {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "inputMapping": [
      { 
        "testCase": ["TS1_TC1"],
        "input": { 
          "name": "countryInfo",
          "type": "map",
          "item": [
            { "name": "countryCode", "value": "BE" },
            { "name": "countryName", "value": "Belgium" }
          ]
        } 
      }
    ]    
  }

For the full specification of the **start** operation's request payload you may check its :ref:`JSON schema definition<api__test_sessions__start__request>`.

The response you receive from the **start** operation, includes a confirmation of the test sessions that have been started or planned for execution
(if execution was requested to be sequential). The information for each scheduled session is returned in the ``createdSessions`` array, of which
each item corresponds to one session. For each session you are informed of its relevant ``testSuite`` and ``testCase``, as well as its assigned 
``session`` identifier with which you can follow its progress. 

.. code-block:: json

  {
    "createdSessions": [
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC1",
        "session": "63b76ce6-5ade-431f-8620-8dadb13d2f42"
      },
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC2",
        "session": "a866297c-ccb0-4133-9ae9-2c3af7aba0bd"
      }
    ]
  }

You may use the reported session identifiers to check the sessions' :ref:`status<api__test_sessions__status>` and, if needed, forcibly :ref:`stop<api__test_sessions__stop>` them.
In case your ``start`` call specified ``waitForCompletion`` as ``true`` with a 
``maximumWaitTime``, each returned test session information will include a ``completed`` flag to inform you whether it was known to have completed
within the specified delay.

.. code-block:: json

  {
    "createdSessions": [
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC1",
        "session": "63b76ce6-5ade-431f-8620-8dadb13d2f42",
        "completed": true
      },
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC2",
        "session": "a866297c-ccb0-4133-9ae9-2c3af7aba0bd",
        "completed": false
      }
    ]
  }

.. _api__test_sessions__start__request:

start - request schema
++++++++++++++++++++++

The payload of the **start** operation's request is defined by the following :download:`JSON Schema<resources/sessions/start_request.schema.json>`:

.. literalinclude:: resources/sessions/start_request.schema.json
   :language: json

.. _api__test_sessions__start__response:

start - response schema
+++++++++++++++++++++++

The payload of the **start** operation's response is defined by the following :download:`JSON Schema<resources/sessions/start_response.schema.json>`:

.. literalinclude:: resources/sessions/start_response.schema.json
   :language: json

.. _api__test_sessions__status:

status
~~~~~~

The **status** operation is used to check the progress of one or more specific test sessions. It can be used with any test session, not only
sessions launched via the test bed's REST API, as long as you are authorised to view them.

To call the **status** operation make an HTTP ``POST`` to path ``/api/rest/tests/status``. As with all test bed REST operations for session
management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

.. note::
  **Using GET:** Prior to release 1.17.0 the **status** operation was available through HTTP ``GET``. This remains possible as an alternative
  to ``POST`` but is not part of the API's :ref:`OpenAPI documentation<api__openapi>` as ``GET`` requests are not supposed to
  have body content.

In the request's payload you may provide two properties to define your query:

* The ``session`` array, including one or more session identifiers to look up.
* The ``withLogs`` boolean flag to specify whether you want to view the detailed log trace for each returned session. By default log traces
  are not returned, but you can set this to ``true`` to include them.
* The ``withReports`` boolean flag to specify whether you want to also include the sessions' XML report expressed in the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__.
  By default reports are not included.

The following example call makes a query for one test session, choosing to also return its detailed log:

.. code-block:: json

  {
    "session": ["08e49917-d560-4ffb-bbf5-280bf1084148"],
    "withLogs": true
  }

As a response for the **status** operation, the test bed returns the latest information for the requested sessions in an array named ``sessions``.
This includes one item per reported session which includes in turn the following properties:

* ``session``, for the session's identifier.
* ``result``, one of "SUCCESS", "FAILURE" or "UNDEFINED" for the overall test status.
* ``startTime``, containing a timestamp for the session's launch time.

The above properties are included for all test sessions, active or completed. If a session is completed this information additionally includes the
following properties:

* ``endTime``, containing a timestamp of the session's completion time.
* ``message``, optionally included if an overall output message was produced by the test session.

In case detailed log traces were requested (i.e. property ``withLogs`` was included and set to ``true``), each test session will 
also include a property named ``logs``. This is a string array containing one item per reported log message. Similarly, if
test session reports were requested (i.e. property ``withReports`` was included and set to ``true``), a further property named
``report`` will be included. This is a string value that includes the complete XML content of the report as a JSON-escaped string
(click :download:`here<../testHistory/resources/test_case_report.xml>` for a complete XML report sample).

The following example illustrates the status information returned for a single completed test session with logs and reports included:

.. code-block:: json

  {
    "sessions": [
      {
        "session": "08e49917-d560-4ffb-bbf5-280bf1084148",
        "result": "FAILURE",
        "startTime": "2022-03-17T13:28:16Z",
        "endTime": "2022-03-17T13:28:38Z",
        "message": "Your query did not have the expected type.",
        "logs": [
          "[2022-03-17 14:28:15] DEBUG - Configuring session [08e49917-d560-4ffb-bbf5-280bf1084148]",
          "[2022-03-17 14:28:15] INFO  - Starting session",
          "[2022-03-17 14:28:15] DEBUG - Status update - step [Query system] - ID [1]: PROCESSING",
          "[2022-03-17 14:28:15] DEBUG - Status update - step [Query system] - ID [1]: WAITING",
          "[2022-03-17 14:28:15] WARN  - Received 'receive' call from Test Bed",
          "[2022-03-17 14:28:37] DEBUG - Received notification",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Query system] - ID [1]: COMPLETED",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Response] - ID [2]: PROCESSING",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Response] - ID [2]: COMPLETED",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Sequence] - ID [3]: PROCESSING",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Verify the query type] - ID [3.1]: PROCESSING",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Verify the query type] - ID [3.1]: ERROR",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Sequence] - ID [3]: ERROR",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Call] - ID [3]: ERROR",
          "[2022-03-17 14:28:37] DEBUG - Preparing to stop",
          "[2022-03-17 14:28:38] INFO  - Session finished with result [ERROR]"
        ],
        "report": "<?xml version=\"1.0\"><TestCaseOverviewReport>...</TestCaseOverviewReport>"
      }
    ]
  }

.. _api__test_sessions__status__request:

status - request schema
+++++++++++++++++++++++

The payload of the **status** operation's request is defined by the following :download:`JSON Schema<resources/sessions/status_request.schema.json>`:

.. literalinclude:: resources/sessions/status_request.schema.json
   :language: json

.. _api__test_sessions__status__response:

status - response schema
++++++++++++++++++++++++

The payload of the **status** operation's response is defined by the following :download:`JSON Schema<resources/sessions/status_response.schema.json>`:

.. literalinclude:: resources/sessions/status_response.schema.json
   :language: json

.. _api__test_sessions__stop:

stop
~~~~

The **stop** operation is used to forcibly terminate one or more specific test sessions. It can be used with any test session, not only
sessions launched via the test bed's REST API, as long as you are authorised to view them.

To call the **stop** operation make an HTTP ``POST`` to path ``/api/rest/tests/stop``. As with all test bed REST operations for session
management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

In the request's payload you are expected to provide an array named ``session``, including the session identifiers for one or more test sessions 
you want to stop. In the following example, a request is being made to terminate two test sessions:

.. code-block:: json

  {
    "session": ["08e49917-d560-4ffb-bbf5-280bf1084148", "a866297c-ccb0-4133-9ae9-2c3af7aba0bd"]
  }

Once this call is made, the test bed will immediately terminate the requested test sessions. The response to the **stop** operation has an
empty body and is returned with a ``200`` (OK) status code.

.. _api__test_sessions__stop__request:

stop - request schema
+++++++++++++++++++++

The payload of the **stop** operation's request is defined by the following :download:`JSON Schema<resources/sessions/stop_request.schema.json>`:

.. literalinclude:: resources/sessions/stop_request.schema.json
   :language: json

.. _api__test_sessions__report:

report
~~~~~~

The **report** operation is used to retrieve a test session's report. It can be used with any test session, not only sessions launched via the test bed's REST API, as long as you are authorised to view them.

To call the **report** operation make an HTTP ``GET`` to path ``/api/rest/tests/report/{sessionId}``, where ``sessionId`` is replaced by the session's identifier.
As with all test bed REST operations for session management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

The format of the report is by default XML, using in particular the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__ syntax.
You may also request the report in PDF, by setting the ``Accept`` HTTP header to ``application/pdf``.

Once this call is made, the test bed will return a response with a ``200`` (OK) status code, whose payload is the report's content. The following sample is a complete 
example of such a report (in the default XML format):

.. literalinclude:: ../testHistory/resources/test_case_report.xml
   :language: xml

.. _api__test_suites:

Test suite management
---------------------

The test bed foresees API operations to **deploy** and **undeploy** test suites. Managing test suites in this way is primarily used during **test suite development**, 
to allow the deployment of test suites via automation processes.

Test suite management operations make use of API keys to determine the information relevant to a specific call. These keys are:

* The key to identify a **specification**, displayed when :ref:`viewing a specification's details<domains__specification>`.
* The identifier of a **test suite**, displayed when :ref:`viewing a test suite's details<domains__test_suite_details>`.

The API includes the following operations to manage test suites:

* :ref:`deploy<api__test_suites__deploy>`: Deploy a (non-shared) test suite to a specification.
* :ref:`undeploy<api__test_suites__undeploy>`: Remove a (non-shared) test suite from a specification.
* :ref:`deployShared<api__test_suites__deployShared>`: Deploy a shared test suite to a community's domain.
* :ref:`undeployShared<api__test_suites__undeployShared>`: Remove a shared test suite from a community's domain.
* :ref:`linkShared<api__test_suites__linkShared>`: Link a shared test suite to one or more specifications.
* :ref:`unlinkShared<api__test_suites__unlinkShared>`: Unlink a shared test suite from one or more specifications.

Details on each operation, including sample requests and responses, are provided in the following sections.

.. _api__test_suites__deploy:

deploy
~~~~~~

The **deploy** operation is used to add a new or updated test suite to a specification. Apart from providing the test suite itself, the operation's
parameters allow you to specify how to handle validation issues and existing conformance tests.

To call the **deploy** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/deploy``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define at least the following information:

* The ``specification``, referring to the API key of the specification to be updated.
* The ``testSuite``, including the data of the test suite archive being deployed.

Apart from these properties, you may optionally specify additional properties as boolean flags to determine archive handling options. Specifically:

* Set ``ignoreWarnings`` to ``true`` to allow the test suite's deployment even in case of validation warnings. By default validation warnings will prevent the deployment
  from completing.
* Set ``replaceTestHistory`` to ``true`` to clear any existing conformance testing history relevant to the test suite. By default existing tests are maintained.
* Set ``updateSpecification`` to ``true`` to update existing specification metadata to values provided in the test suite archive. By default existing information will not
  be updated.
* Set ``showIdentifiers`` to ``false`` to skip returning the API identifiers relevant to the uploaded test suite and its test cases.

In addition to the above properties, you may also specify an array named ``testCases`` that provides fine-grained instructions on how to handle the test suite's
test cases if these are found to already exist. For test cases not specified in this way, or if the ``testCases`` array is altogether missing, the values provided
in ``replaceTestHistory`` and ``updateSpecification`` are treated as the defaults. The items of the ``testCases`` array define the following properties:

* ``identifier``, referring to the identifier of the test case.
* ``updateSpecification``, which can be set to ``true`` to update the test case's metadata (name and description).
* ``replaceTestHistory``, which can be set to ``true`` to reset the testing history for the test case.

The **deploy** operation actually comes with two variants to allow you to provide the test suite archive in the way that best fits your needs. The selected
approach is determined by you by setting the request's ``Content-Type`` header to match the type of submission you are making. Specifically:

* Setting ``Content-Type`` to ``application/json`` will consider that the request's body is JSON that includes the test suite archive as a **BASE64 encoded string**.
  The request's inputs in this case are added as JSON properties with the BASE64 encoded string added as property ``testSuite``.
* Setting ``Content-Type`` to ``multipart/form-data`` will consider the request as a **multipart form submission**. The request's inputs in this case will be 
  request parameters with the test suite archive named ``testSuite`` (the request's file part). In addition, the ``testCases`` array is replaced in this case
  by four repeatable parameters named ``testCaseWithSpecificationUpdate``, ``testCaseWithoutSpecificationUpdate``, ``testCaseWithTestHistoryReplacement``
  and ``testCaseWithoutTestHistoryReplacement``, each set with the relevant test case identifier.

The approach to follow depends on the client tool you want to use to make the calls. When submitting as JSON you will need to always calculate the BASE64 string of the test suite archive before
including it in the payload. In contrast, if you make a multipart form submission, your tool should be able to correctly construct a multipart request with the relevant part
boundaries. If you use a tool such as ``curl`` that handles this, the multipart form approach is likely simpler as you can simply point to the archive's file to submit without
using additional tools to generate BASE64 strings.

The following sample is a JSON request to deploy a test suite to a specification (the test suite's BASE64 encoded string is truncated for brevity).

.. code-block:: json

  {
    "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

As discussed earlier you may also include additional flags to determine how the upload should be handled. The following example includes the
``ignoreWarnings``, ``replaceTestHistory``, ``updateSpecification``, and ``showIdentifiers`` flags to override the default behaviours.

.. code-block:: json

  {
    "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "ignoreWarnings": true,
    "replaceTestHistory": true,
    "updateSpecification": true,
    "showIdentifiers": false,
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

For the full specification of the **deploy** operation's request payload, when this is provided as JSON, you may check its :ref:`JSON schema definition<api__test_suites__deploy__request>`.

Once the **deploy** operation has completed you receive a JSON response to notify you of the deployment's result. This response will always include 
a boolean ``completed`` flag to inform you whether the deployment was actually carried out. Alongside this you may optionally receive report items
produced by the test suite's validation in three arrays named ``errors``, ``warnings`` and ``messages``. Each item of these arrays includes the finding's ``description``
and ``location``, the latter being the path of the test suite's resource (e.g. a test case file) that resulted in it being reported. A test suite's
deployment may not be completed in case it's validation produced errors or warnings (that were not set to be ignored via the request's ``ignoreWarnings`` flag).

Besides the overall status and validation summary, and unless you have specified ``showIdentifiers`` as ``false``, the response will also include the **API keys** of all data created, or affected by the test suite. These keys allow 
you to automate other operations related to this test suite through the REST API, such as :ref:`running test sessions <api__test_sessions__start>` or
:ref:`managing conformance statements <api__conformance_statements>`. The returned API keys include:

* The **identifier** of the **test suite** that was created or updated as a result of the operation.
* The **identifiers** of **test cases** that form the latest version of the test suite.
* The **names** and **identifiers** of the target **specifications**.
* The **names** and **identifiers** of the test suite **actors**.

The following example presents a response that produced a validation warning but was nonetheless completed:

.. code-block:: json

  {
    "completed": true,
    "warnings": [
      {
        "description": "[TDL-015] Actor [Actor2] is not referenced in any test cases."
      }
    ],
    "identifiers": {
        "testSuite": "testSuite1",
        "testCases": [ "testCase1", "testCase2", "testCase3" ],
        "specifications": [
          {
            "name": "Specification 1",
            "identifier": "77040396X168EX40CDXBD3FX62347E1A09E6",
            "actors": [
              { 
                "name": "Actor 1",
                "identifier": "28E6E6C9X80BDX40C9XB54DX102800BC32D7"
              },
              { 
                "name": "Actor 2",
                "identifier": "4F5E9DEBX1F5DX4ECBX92DBXC5DEF1035643"
              }
            ]
          }
        ]
      }
  }

For the full specification of the **deploy** operation's response payload you may check its :ref:`JSON schema definition<api__test_suites__deploy__response>`.

.. _api__test_suites__deploy__request:

deploy - request schema (JSON case)
+++++++++++++++++++++++++++++++++++

The payload of the **deploy** operation's request (in the case it submitted as JSON content) is defined by the following :download:`JSON Schema<resources/suites/deploy_request.schema.json>`:

.. literalinclude:: resources/suites/deploy_request.schema.json
   :language: json

.. _api__test_suites__deploy__response:

deploy - response schema
++++++++++++++++++++++++

The payload of the **deploy** operation's response is defined by the following :download:`JSON Schema<resources/suites/deploy_response.schema.json>`:

.. literalinclude:: resources/suites/deploy_response.schema.json
   :language: json

.. _api__test_suites__undeploy:

undeploy
~~~~~~~~

The **undeploy** operation is used to remove a test suite from a specification. Removing a test suite will result in the relevant conformance testing
history being cleared.

To call the **undeploy** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/undeploy``. To authorise the operation and identify the specification domain
from which the test suite will be removed, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define the following two properties:

* The ``specification``, referring to the API key of the specification to be updated.
* The ``testSuite``, referring to the identifier of the test suite to be removed.

The following sample is a request to remove a test suite from a specification.

.. code-block:: json

  {
    "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "testSuite": "test_suite_1"
  }

Once this call is made, the test bed will remove the specified test suite and clear any related conformance tests. The response to the **undeploy** operation has an
empty body and is returned with a ``200`` (OK) status code.

.. _api__test_suites__undeploy__request:

undeploy - request schema
+++++++++++++++++++++++++

The payload of the **undeploy** operation's request is defined by the following :download:`JSON Schema<resources/suites/undeploy_request.schema.json>`:

.. literalinclude:: resources/suites/undeploy_request.schema.json
   :language: json

.. _api__test_suites__deployShared:

deployShared
~~~~~~~~~~~~

The **deployShared** operation is used to add a new or updated test suite to a domain to be shared across multiple specifications. Apart from providing the test suite itself, the operation's
parameters allow you to specify how to handle validation issues and existing conformance tests.

To call the **deployShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/deployShared``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define at least the ``testSuite``, including the data of the test suite archive being deployed. 
Apart from this, you may optionally specify additional properties as boolean flags to determine archive handling options. Specifically:

* Set ``ignoreWarnings`` to ``true`` to allow the test suite's deployment even in case of validation warnings. By default validation warnings will prevent the deployment
  from completing.
* Set ``replaceTestHistory`` to ``true`` to clear any existing conformance testing history relevant to the test suite. By default existing tests are maintained.
* Set ``updateSpecification`` to ``true`` to update existing test suite metadata to values provided in the test suite archive. By default existing information will not
  be updated.

In addition to the above properties, you may also specify an array named ``testCases`` that provides fine-grained instructions on how to handle the test suite's
test cases if these are found to already exist. For test cases not specified in this way, or if the ``testCases`` array is altogether missing, the values provided
in ``replaceTestHistory`` and ``updateSpecification`` are treated as the defaults. The items of the ``testCases`` array define the following properties:

* ``identifier``, referring to the identifier of the test case.
* ``updateSpecification``, which can be set to ``true`` to update the test case's metadata (name and description).
* ``replaceTestHistory``, which can be set to ``true`` to reset the testing history for the test case.

The **deployShared** operation actually comes with two variants to allow you to provide the test suite archive in the way that best fits your needs. The selected
approach is determined by you by setting the request's ``Content-Type`` header to match the type of submission you are making. Specifically:

* Setting ``Content-Type`` to ``application/json`` will consider that the request's body is JSON that includes the test suite archive as a **BASE64 encoded string**.
  The request's inputs in this case are added as JSON properties with the BASE64 encoded string added as property ``testSuite``.
* Setting ``Content-Type`` to ``multipart/form-data`` will consider the request as a **multipart form submission**. The request's inputs in this case will be 
  request parameters with the test suite archive named ``testSuite`` (the request's file part). In addition, the ``testCases`` array is replaced in this case
  by four repeatable parameters named ``testCaseWithSpecificationUpdate``, ``testCaseWithoutSpecificationUpdate``, ``testCaseWithTestHistoryReplacement``
  and ``testCaseWithoutTestHistoryReplacement``, each set with the relevant test case identifier.

The approach to follow depends on the client tool you want to use to make the calls. When submitting as JSON you will need to always calculate the BASE64 string of the test suite archive before
including it in the payload. In contrast, if you make a multipart form submission, your tool should be able to correctly construct a multipart request with the relevant part
boundaries. If you use a tool such as ``curl`` that handles this, the multipart form approach is likely simpler as you can simply point to the archive's file to submit without
using additional tools to generate BASE64 strings.

The following sample is a JSON request to deploy a shared test suite (the test suite's BASE64 encoded string is truncated for brevity).

.. code-block:: json

  {
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

As discussed earlier you may also include additional flags to determine how the upload should be handled. The following example includes the
``ignoreWarnings``, ``replaceTestHistory`` and ``updateSpecification`` flags to override the default behaviours.

.. code-block:: json

  {
    "ignoreWarnings": true,
    "replaceTestHistory": true,
    "updateSpecification": true,
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

For the full specification of the **deployShared** operation's request payload, when this is provided as JSON, you may check its :ref:`JSON schema definition<api__test_suites__deployShared__request>`.

Once the **deployShared** operation has completed you receive a JSON response to notify you of the deployment's result. This response will always include 
a boolean ``completed`` flag to inform you whether the deployment was actually carried out. Alongside this you may optionally receive report items
produced by the test suite's validation in three arrays named ``errors``, ``warnings`` and ``messages``. Each item of these arrays includes the finding's ``description``
and ``location``, the latter being the path of the test suite's resource (e.g. a test case file) that resulted in it being reported. A test suite's
deployment may not be completed in case it's validation produced errors or warnings (that were not set to be ignored via the request's ``ignoreWarnings`` flag).

Besides the overall status and validation summary, the response will also include the **API keys** of all data created, or affects by the test suite. These keys allow 
you to automate other operations related to this test suite through the REST API, such as :ref:`running test sessions <api__test_sessions__start>` or
:ref:`managing conformance statements <api__conformance_statements>`. The returned API keys include:

* The **identifier** of the **test suite** that was created or updated as a result of the operation.
* The **identifiers** of **test cases** that form the latest version of the test suite.
* The **names** and **identifiers** of the **specifications** linked to the shared test suite.
* The **names** and **identifiers** of the test suite **actors**.

The following example presents a response that produced a validation warning but was nonetheless completed:

.. code-block:: json

  {
    "completed": true,
    "warnings": [
      {
        "description": "[TDL-015] Actor [Actor2] is not referenced in any test cases."
      }
    ],
    "identifiers": {
        "testSuite": "testSuite1",
        "testCases": [ "testCase1", "testCase2", "testCase3" ],
        "specifications": [
          {
            "name": "Specification 1",
            "identifier": "77040396X168EX40CDXBD3FX62347E1A09E6",
            "actors": [
              { 
                "name": "Actor 1",
                "identifier": "28E6E6C9X80BDX40C9XB54DX102800BC32D7"
              },
              { 
                "name": "Actor 2",
                "identifier": "4F5E9DEBX1F5DX4ECBX92DBXC5DEF1035643"
              }
            ]
          }
        ]
      }
  }

For the full specification of the **deployShared** operation's response payload you may check its :ref:`JSON schema definition<api__test_suites__deployShared__response>`.

.. _api__test_suites__deployShared__request:

deployShared - request schema (JSON case)
+++++++++++++++++++++++++++++++++++++++++

The payload of the **deployShared** operation's request (in the case it submitted as JSON content) is defined by the following :download:`JSON Schema<resources/suites/deployShared_request.schema.json>`:

.. literalinclude:: resources/suites/deployShared_request.schema.json
   :language: json

.. _api__test_suites__deployShared__response:

deployShared - response schema
++++++++++++++++++++++++++++++

The payload of the **deployShared** operation's response is defined by the following :download:`JSON Schema<resources/suites/deploy_response.schema.json>`:

.. literalinclude:: resources/suites/deploy_response.schema.json
   :language: json

.. _api__test_suites__undeployShared:

undeployShared
~~~~~~~~~~~~~~

The **undeployShared** operation is used to remove a shared test suite from a domain. Removing a test suite will result in the relevant conformance testing
history being cleared.

To call the **undeployShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/undeployShared``. To authorise the operation and identify the domain
from which the test suite will be removed, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define the ``testSuite`` property, referring to the identifier of the test suite to be removed. 
The following sample is a request to remove a test suite from a specification.

.. code-block:: json

  {
    "testSuite": "test_suite_1"
  }

Once this call is made, the test bed will remove the specified test suite and clear any related conformance tests. The response to the **undeployShared** operation has an
empty body and is returned with a ``200`` (OK) status code.

.. _api__test_suites__undeployShared__request:

undeployShared - request schema
+++++++++++++++++++++++++++++++

The payload of the **undeployShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/undeployShared_request.schema.json>`:

.. literalinclude:: resources/suites/undeployShared_request.schema.json
   :language: json

.. _api__test_suites__linkShared:

linkShared
~~~~~~~~~~

The **linkShared** operation is used to link a shared test suite to one or more specifications.

To call the **linkShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/linkShared``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define:

* The ``testSuite`` to link, referring to the test suite's identifier.
* The ``specifications`` array defining the specifications to link the test suite with.

Each entry of the ``specifications`` has two properties:

* The ``specification`` (required), referring to the API key of the specification.
* The ``update`` flag (optional), defining whether the metadata of the targeted specification (actor names, identifiers and descriptions)
  should be updated to match the information from the test suite (default is "false").

The following sample is a JSON request to link a shared test suite to a specification (the test suite's BASE64 encoded string is truncated for brevity).

.. code-block:: json

  {
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA==",
    "specifications": [
      {
        "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
      }
    ]
  }

For the full specification of the **linkShared** operation's request payload, you may check its :ref:`JSON schema definition<api__test_suites__linkShared__request>`.

Once the **linkShared** operation has completed you receive a JSON response to inform you of the result of the link. This response is an
array with one item per targetted specification that includes the following properties:

* ``specification``, with the API key of the relevant specification.
* ``linked``, a boolean flag that is "true" if the operation link was carried out.
* ``message``, that in case of a failed link includes an explanatory message.

The following example presents a response for a successful link:

.. code-block:: json

  [
    {
      "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
      "linked": true
    }
  ]

For the full specification of the **linkShared** operation's response payload you may check its :ref:`JSON schema definition<api__test_suites__linkShared__response>`.

.. _api__test_suites__linkShared__request:

linkShared - request schema
+++++++++++++++++++++++++++

The payload of the **linkShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/linkShared_request.schema.json>`:

.. literalinclude:: resources/suites/linkShared_request.schema.json
   :language: json

.. _api__test_suites__linkShared__response:

linkShared - response schema
++++++++++++++++++++++++++++

The payload of the **linkShared** operation's response is defined by the following :download:`JSON Schema<resources/suites/linkShared_response.schema.json>`:

.. literalinclude:: resources/suites/linkShared_response.schema.json
   :language: json

.. _api__test_suites__unlinkShared:

unlinkShared
~~~~~~~~~~~~

The **unlinkShared** operation is used to remove the link between a shared test suite and one or more specifications. Note that removing such a link has no effect
on existing test sessions but will remove the test suite from relevant conformance statements.

To call the **unlinkShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/unlinkShared``. To authorise the operation and identify the domain that
contains the test suite and specifications, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define the following two properties:

* The ``testSuite``, referring to the identifier of the test suite to be removed.
* The ``specifications`` array, including as string values the API keys of the target specifications.

The following sample is a request to unlink a test suite from a specification.

.. code-block:: json

  {
    "testSuite": "test_suite_1"
    "specifications": [ "B277E210X2FB4X4BD7X88B6X951504F45F8F" ]
  }

Once this call is made, the test bed will unlink the specified test suite from the specification(s). The response has an empty body and is returned with a ``200`` (OK) status code.

.. _api__test_suites__unlinkShared__request:

unlinkShared - request schema
+++++++++++++++++++++++++++++

The payload of the **unlinkShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/unlinkShared_request.schema.json>`:

.. literalinclude:: resources/suites/unlinkShared_request.schema.json
   :language: json

.. _api__openapi:

OpenAPI documentation
---------------------

The test bed's REST API is also documented using the standard `OpenAPI specification <https://swagger.io/specification/>`_. You may 
download this from :download:`here <resources/openapi.json>`, or access it live from the test bed from path ``/api/rest``. On a typical 
`developer instance <https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBed/>`_ this would be available at ``http://localhost:9000/api/rest``.

To facilitate reviewing and using the REST API, the test bed exposes also a `Swagger UI <https://swagger.io/tools/swagger-ui/>`_ accessible
at ``http://localhost:9000/api/rest/swagger``.

.. figure:: ../screenshots/swagger-ui.png
  :align: center

.. _api__health:

Health monitoring
-----------------

As a complement to its REST API, the test bed also publishes a **health-check endpoint** to facilitate availability monitoring. This
is not listed as a part of the other REST operations, nor does it figure in the :ref:`OpenAPI documentation<api__openapi>` as it is
always available regardless of whether the REST API is enabled or not.

To make a health-check, send a ``GET`` to path ``/api/healthcheck``. If all services are up and running the response will have a code ``200`` (OK) and
empty body.

Besides testing as part of availability monitoring, this operation could also be used as part of automated build scripting to
identify when the test bed has completed its initialisation and is ready to receive other API calls.

.. _AUTOMATION_API_ENABLED: https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBedProduction/index.html#configuration-properties
.. _production: https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBedProduction/
.. _development: https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBed/