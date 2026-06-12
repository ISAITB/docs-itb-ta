The community management operations allow you to manage the Test Bed's **communities**, **organisations** and **systems**. They are useful if you want to
have processes external to the Test Bed manage such information without needing manual actions through the Test Bed's user interface. Specifically you can:

* :ref:`Create <api__community__createCommunity>`, :ref:`update <api__community__updateCommunity>` and :ref:`delete <api__community__deleteCommunity>` communities.
* :ref:`Create <api__community__createOrganisation>`, :ref:`update <api__community__updateOrganisation>`,  :ref:`delete <api__community__deleteOrganisation>` and :ref:`retrieve <api__community__getOrganisations>` organisations.
* :ref:`Create <api__community__createSystem>`, :ref:`update <api__community__updateSystem>`, :ref:`delete <api__community__deleteSystem>` and :ref:`retrieve <api__community__getSystems>` systems.

All community management operations use API keys to authorise calls and determine the information to be updated. Two types of API keys are used, depending
on the operation:

* The key identifying a **community**, for all operations that a community administrator can do through the user interface.
* The **master API key**, for selected top-level operations that are normally reserved for the overall Test Bed administrator.

The sections that follow provide instructions and examples for each operation.
