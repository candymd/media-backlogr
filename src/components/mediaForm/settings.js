import * as yup from "yup";
import { MEDIA_STATUS_TYPES, PLATFORM_TYPES } from "../../../domain/config";

const baseSchema = {
  title: yup
    .string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters long")
    .max(100, "Title must be less than 100 characters")
    .trim(),
  status: yup
    .string()
    .required("Status is required")
    .oneOf(Object.values(MEDIA_STATUS_TYPES), "Invalid status"),
};

export const gameSchema = yup.object({
  ...baseSchema,
  platform: yup
    .string()
    .required("Platform is required")
    .oneOf(Object.values(PLATFORM_TYPES), "Invalid platform"),
});

export const movieSchema = yup.object({
  ...baseSchema,
  director: yup
    .string()
    .required("Director is required")
    .min(2, "Director name must be at least 2 characters long")
    .max(100, "Director name must be less than 100 characters")
    .trim(),
  releaseYear: yup
    .number()
    .required("Release year is required")
    .min(1888, "Release year cannot be earlier than 1888")
    .typeError("Release year must be a number"),
  genre: yup
    .string()
    .required("Genre is required")
    .min(2, "Genre must be at least 2 characters long")
    .max(50, "Genre must be less than 50 characters")
    .trim(),
});
