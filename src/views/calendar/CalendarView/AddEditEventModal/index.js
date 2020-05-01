import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';
import AddEditEventForm from './AddEditEventForm';

function AddEditEventModal({
  event,
  mode,
  onAdd,
  onCancel,
  onDelete,
  onEdit,
  open,
  ...rest
}) {
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      onClose={onCancel}
      open={open}
      {...rest}
    >
      {/* Dialog renders its body even if not open */}
      {open && (
        <AddEditEventForm
          event={event}
          mode={mode}
          onAdd={onAdd}
          onCancel={onCancel}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    </Dialog>
  );
}

AddEditEventModal.propTypes = {
  event: PropTypes.object,
  mode: PropTypes.oneOf(['add', 'edit']),
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  open: PropTypes.bool
};

AddEditEventModal.defaultProps = {
  event: {},
  onAdd: () => {},
  onCancel: () => {},
  onDelete: () => {},
  onEdit: () => {},
  open: false
};

export default AddEditEventModal;
