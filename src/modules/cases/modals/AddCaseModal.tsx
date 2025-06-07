import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  DialogActions,
  Button,
} from "@mui/material";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { Details } from "../components/Details";
import { PersonalInfo } from "../components/PersonalInfo";
import type {
  CalendarEvent,
  Involved,
  Details as CaseDetails,
} from "../utils/Case";
import { useAddCase } from "../hooks/useAddCase";
import { infoModal } from "../../../share/infoModal";

interface FormState {
  first: Involved;
  second: Involved;
}

interface FormErrors {
  first: Partial<Record<keyof Involved, boolean>>;
  second: Partial<Record<keyof Involved, boolean>>;
  details: Partial<Record<keyof CaseDetails, boolean>>;
}

interface AddQuoteModalProps {
  open: boolean;
  onClose: () => void;
  dataQuote: CalendarEvent;
}

export function AddCaseModal({ open, onClose, dataQuote }: AddQuoteModalProps) {
  const [formData, setFormData] = useState<FormState>({
    first: { dni: "", name: "", lastname: "", phone: "", email: "" },
    second: { dni: "", name: "", lastname: "", phone: "", email: "" },
  });

  const [detailsData, setDetailsData] = useState<CaseDetails>({
    status: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    first: {},
    second: {},
    details: {},
  });

  const { addCase } = useAddCase();

  useEffect(() => {
    if (dataQuote && open) {
      setFormData((prev) => ({
        ...prev,
        first: {
          ...prev.first,
          dni: dataQuote.firstInvolved || "",
          email: dataQuote.firstEmail || "",
          name: "",
          lastname: "",
          phone: "",
        },
        second: {
          ...prev.second,
          dni: dataQuote.secondInvolved || "",
          email: dataQuote.secondEmail || "",
          name: "",
          lastname: "",
          phone: "",
        },
      }));
    }
  }, [dataQuote, open]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof FormState],
        [field]: value,
      },
    }));
  };

  const handleDetailsChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setDetailsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const newErrors: FormErrors = {
      first: {},
      second: {},
      details: {},
    };

    (
      ["dni", "name", "lastname", "phone", "email"] as (keyof Involved)[]
    ).forEach((field) => {
      if (!formData.first[field]) newErrors.first[field] = true;
      if (!formData.second[field]) newErrors.second[field] = true;
    });

    (["status", "subject", "description"] as (keyof CaseDetails)[]).forEach(
      (field) => {
        if (!detailsData[field]) newErrors.details[field] = true;
      }
    );

    const hasErrors =
      Object.values(newErrors.first).some(Boolean) ||
      Object.values(newErrors.second).some(Boolean) ||
      Object.values(newErrors.details).some(Boolean);

    setErrors(newErrors);

    if (hasErrors) {
      return;
    }

    const payload = {
      firstInvolved: formData.first.dni,
      secondInvolved: formData.second.dni,
      firstName: formData.first.name,
      firstLastName: formData.first.lastname,
      firstCellphone: formData.first.phone,
      firstEmail: formData.first.email,
      secondName: formData.second.name,
      secondLastName: formData.second.lastname,
      secondCellphone: formData.second.phone,
      secondEmail: formData.second.email,
      status: detailsData.status,
      subject: detailsData.subject,
      description: detailsData.description,
    };

    const result = await addCase(payload);
    onClose();
    if (result?.success) {
      if (result.message === "Caso guardado con éxito") {
        setTimeout(() => {
          infoModal("success", result.message);
        }, 300);
      } else {
        setTimeout(() => {
          infoModal("error", result.message);
        }, 300);
      }
    } else {
      infoModal("error", result?.message || "Error al registrar el caso");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Registrar caso</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid size={6}>
            <PersonalInfo
              formData={formData.first}
              dataQuote={dataQuote}
              onChange={handleChange}
              prefix="first"
              title="Primera parte"
              jcontent="left"
              errors={errors.first}
            />
          </Grid>
          <Grid size={6}>
            <PersonalInfo
              formData={formData.second}
              dataQuote={dataQuote}
              onChange={handleChange}
              prefix="second"
              title="Segunda parte"
              jcontent="right"
              errors={errors.second}
            />
          </Grid>
        </Grid>

        <Details
          title="Detalles del caso"
          detailsData={detailsData}
          onChange={handleDetailsChange}
          errors={errors.details}
        />
      </DialogContent>

      <DialogActions sx={{ padding: "0 24px 20px 24px" }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<MdOutlineCancel />}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          startIcon={<FaRegSave />}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
