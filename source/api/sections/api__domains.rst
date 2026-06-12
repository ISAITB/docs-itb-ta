The domain management operations allow you to manage the Test Bed's **domains**, **specification groups**, **specifications** and **actors**. They are useful if you want to
have processes external to the Test Bed manage such information without needing manual actions through the Test Bed's user interface. Specifically you can:

* :ref:`Create <api__domain__createDomain>`, :ref:`update <api__domain__updateDomain>`, :ref:`delete <api__domain__deleteDomain>` and :ref:`retrieve <api__domain__getDomain>` domains.
* :ref:`Create <api__domain__createSpecificationGroup>`, :ref:`update <api__domain__updateSpecificationGroup>`, :ref:`delete <api__domain__deleteSpecificationGroup>` and :ref:`retrieve <api__domain__getSpecificationGroup>` specification groups.
* :ref:`Create <api__domain__createSpecification>`, :ref:`update <api__domain__updateSpecification>`, :ref:`delete <api__domain__deleteSpecification>` and :ref:`retrieve <api__domain__getSpecification>` specifications.
* :ref:`Create <api__domain__createActor>`, :ref:`update <api__domain__updateActor>`, :ref:`delete <api__domain__deleteActor>` and :ref:`retrieve <api__domain__getActor>` actors.

All domain management operations use API keys to authorise calls and determine the information to be updated. Two types of API keys are used, depending
on the operation:

* The key identifying a **community**, for all operations that a community administrator can do through the user interface.
* The :ref:`master API key <systemAdmin__config__restApi>`, for selected top-level operations that are normally reserved for the overall Test Bed administrator.

The sections that follow provide instructions and examples for each operation.
