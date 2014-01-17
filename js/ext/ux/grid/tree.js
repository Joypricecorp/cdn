
/**
 * @TODO move function above in to this ux property
 */
Ext.define('Ext.ux.grid.tree',{});

/**
 * Function to uncheck parent nodes if any of the child nodes is unchecked.
 *
 * @param node
 *          the selected node.
 * @param checked
 *          the checkbox status.
 * @return
 */

function recusriveCheckingParents(node, checked) {
	if (checked == false) {
		var parent = node.parentNode;
		if (parent && parent.parentNode != null /*not root*/ && parent.data.checked == true) {
			parent.set('checked', checked);
			recusriveCheckingParents(parent, checked);
		}
	}
}

/**
 * Recursive function to check the child nodes when the parent is selected.
 *
 * @param node
 *          the selected node
 * @param checked
 *          the status of checkbox
 */

function recursiveCheckingChildren(node, checked) {
	node.expand();
	if (node.hasChildNodes()) {
		var allChecked = true;
		if (checked == false) {
			node.eachChild(function(child) {
				if (!child.data.checked) {
					allChecked = false;
				}
			});
		}
		if (allChecked) {
			node.eachChild(function(child) {
				child.set('checked', checked);
				recursiveCheckingChildren(child, checked);
			});
		}
	}
}

/**
 * Recursive function to uncheck the child nodes when the parent is unchecked.
 *
 * @param node
 *          the selected node
 * @param checked
 *          the status of checkbox
 */

function recursiveUnCheckingChildren(node, checked) {
	node.expand();
	if (checked == false) {
		if (node.hasChildNodes()) {
			node.eachChild(function(child) {
				child.set('checked', false);
				recursiveCheckingChildren(child, checked);
			});
		}
	}
}

/**
 * Function to check the parent node if all the children are checked.
 *
 * @param node
 *          the selected node.
 * @param checked
 *          the checkbox status
 * @return
 */

function recursiveTestingSiblingChecking(node, checked) {
	if (checked == true) {
		var parent = node.parentNode;
		var allSilblingChecked = true;
		if (parent) {
			parent.eachChild(function(child) {
				if (child.data.checked == false) {
					allSilblingChecked = false;
				}
			});
			if (allSilblingChecked) {
				parent.set('checked',true);
				recursiveTestingSiblingChecking(parent, checked);
			}
		}
	}
}

/**
 * Function to check the parent node if any the children are checked.
 *
 * @param node
 *          the selected node.
 * @param checked
 *          the checkbox status
 * @return
 */

function recursiveParentsChecking(node, checked) {
	if (checked == true) {
		var parent = node.parentNode;
		if (parent && parent.parentNode != null /*not root*/ && parent.data.checked == false) {
			parent.set('checked', true);
			recursiveParentsChecking(parent, checked);
		}
	}
}