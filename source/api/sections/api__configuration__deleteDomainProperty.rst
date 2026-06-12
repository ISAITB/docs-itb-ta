The **deleteDomainProperty** operation is used to delete the definition of a domain property. To use it make an HTTP ``DELETE`` to path ``/api/rest/configure/domain/{parameter}``,
setting ``{parameter}`` to the target property's key. In addition, you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In case the provided community API key identifies a community without a linked domain, you also need to identify the target domain. This is done by adapting the operation's path to
``/api/rest/configure/domain/{domain}/{parameter}`` where the additional ``{domain}`` placeholder is set with the target domain's API key.

This operation takes no payload when making a request. If the target property has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.
