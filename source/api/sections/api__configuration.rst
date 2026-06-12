The Test Bed provides the possibility to manage configuration entries via its REST API. Two types of configuration actions are available:

* Managing the **definition** of configuration properties.
* Setting the **values** of configuration properties.

In terms of defining configuration properties you can:

* :ref:`Create <api__configuration__createDomainProperty>`, :ref:`update <api__configuration__updateDomainProperty>` and :ref:`delete <api__configuration__deleteDomainProperty>` domain properties.
* :ref:`Create <api__configuration__createTestService>`, :ref:`update <api__configuration__updateTestService>`, :ref:`delete <api__configuration__deleteTestService>` and :ref:`search <api__configuration__searchTestServices>` test services.
* :ref:`Create <api__configuration__createOrganisationProperty>`, :ref:`update <api__configuration__updateOrganisationProperty>` and :ref:`delete <api__configuration__deleteOrganisationProperty>` organisation properties.
* :ref:`Create <api__configuration__createSystemProperty>`, :ref:`update <api__configuration__updateSystemProperty>` and :ref:`delete <api__configuration__deleteSystemProperty>` system properties.
* :ref:`Create <api__configuration__createStatementProperty>`, :ref:`update <api__configuration__updateStatementProperty>` and :ref:`delete <api__configuration__deleteStatementProperty>` conformance statement (actor) properties.

Once properties are defined you can manage their values for specific organisations and systems through the :ref:`configure <api__configuration__configure>` operation.
