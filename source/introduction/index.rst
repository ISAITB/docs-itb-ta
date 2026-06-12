.. _introduction:

Introduction
============

Welcome to the **Interoperability Test Bed** (**ITB**) user guide. The purpose of this guide is to help you use the 
Interoperability Test Bed to complete your conformance testing needs by documenting its interface, features 
and underlying processes. In addition it provides you with the context you need to understand the concepts 
it uses and get additional information if you choose to.

The approach followed by the user guide is based on use cases. Each distinct action you may carry out on the
interface is documented in a separate chapter covering the core sequence of steps you would take as well the
different options that each action may present to you.

For the sake of brevity the term "Test Bed" will be used to refer to the Interoperability Test Bed unless
otherwise stated.

.. _introduction__what_is_the_test_bed:

What is the Test Bed?
---------------------

The Test Bed is a service offered by the European Commission, specifically the `Interoperability Test Bed Team`_ of DIGIT B.2,
to support the interoperability and conformance testing of projects that enable the development of cross-border public
services. Its purpose is to facilitate such projects by providing project leaders with the means to define their project's testing strategy 
that will be used by their participating organisations. The test services offered in this way may either be presented as a tool to help
in e.g. the development of relevant software, or even as a mandatory qualification step to consider software as conforming to a given
specification. Note that the focus of the Test Bed is software components and specifically:

* **Conformance** and **interoperability** to ensure that the software in question can participate in its foreseen information exchanges with 
  other parties in a correct and meaningful way. The Test Bed is not meant to help with a software's regression, performance or penetration testing.
* The **technical level** ensuring that the software implementation is correct but without addressing (at least directly) interoperability at other 
  levels such as the legal constructs in place or the relevant organisational processes the software supports.

At the core of the Test Bed is the **GITB Test Bed software**. This is a product of the `GITB project`_, a CEN standardisation initiative funded by
the European Commission’s DG GROW to define the specifications and software needed to support a generic interoperability Test Bed service.

.. _GITB project: http://www.cen.eu/work/areas/ict/ebusiness/pages/ws-gitb.aspx
.. _Interoperability Test Bed Team: https://joinup.ec.europa.eu/solution/interoperability-test-bed/about

.. _introduction__how_is_it_maintained:

How is it maintained?
~~~~~~~~~~~~~~~~~~~~~

Following the initial work from the CEN GITB workgroup, the maintenance and evolution of the GITB software and specifications has been taken over 
by the European Commission, specifically the `Interoperability Test Bed Team`_ of DIGIT. DIGIT foresees the
evolutive maintenance of the GITB software and specifications based on the needs of the testing community and publishes regular releases.

.. _Interoperability Test Bed Team: https://joinup.ec.europa.eu/solution/interoperability-test-bed/about

.. _introduction__glossary:

Glossary
--------

.. include:: /api/sections/introduction__glossary.rst

.. _introduction__role:

Your role
---------

Your Test Bed account is configured as a **Test Bed administrator**. This means that you are responsible for the configuration of user communities
and, where not managed by community administrators, the test strategy and the management of your users' organisations in the Test Bed.

Expectations
~~~~~~~~~~~~

As a **Test Bed administrator** you are expected to carry out the following main activities:

* Create user communities for the different projects using the Test Bed (see :ref:`community`).
* Manage test configuration by defining the specification domains (see :ref:`domains`).
* Develop test cases and test services, and manage the test suites for each specification (see :ref:`domains__specification__test_suite_upload`).
* Validate the overall test setup by executing sample test sessions (see :ref:`validate_test_setup`).
* Monitor the Test Bed organisations' conformance status (see :ref:`monitor_conformance_status`) and test history (see :ref:`monitor_test_sessions`).
* Manage the Test Bed's configuration and default elements such as landing pages and legal notices (see :ref:`systemAdmin`).

.. note::
    **Community-managed test configuration:** Although you have access to all communities and test configurations, the detailed management of organisations,
    test entities and test suites within a community will typically be handled by its administrators.

.. _introduction__system_requirements:

System requirements
-------------------

The Test Bed is a web application with minimal prerequisites for its use. The following web browsers have been successfully tested for support:

* Apple Safari.
* Google Chrome.
* Microsoft Edge.
* Mozilla Firefox.
* Opera.

Given that the Test Bed makes use of JavaScript to power its user interface, please ensure that your browser has no security configuration in place
that blocks JavaScript execution. In addition, in terms of network connectivity, the Test Bed uses `web sockets`_ to push updates to your web browser
during the execution of test sessions. If you experience test sessions starting but appearing as frozen with no visual updates, it could be that you
are behind a proxy or firewall that blocks the web socket protocol. In such a case please contact your network administrator for assistance.

.. _web sockets: https://en.wikipedia.org/wiki/WebSocket