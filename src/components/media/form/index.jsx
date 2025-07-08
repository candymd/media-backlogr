import { gameSchema, movieSchema } from "./settings";
import { MEDIA_TYPES } from "../../../../domain/config";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUseCases } from "../../../../application/context/index";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "../../shared/loader/index";
import PropTypes from "prop-types";

const getInitialData = (type) => {
  if (type === MEDIA_TYPES.GAME) {
    return {
      title: "",
      status: "",
      platform: "",
    };
  }
  if (type === MEDIA_TYPES.MOVIE) {
    return {
      title: "",
      status: "",
      director: "",
      releaseYear: "",
      genre: "",
    };
  }

  return {};
};

function MediaForm({ type, onSubmit, initialData, isEditing }) {
  const { addGameUseCase, addMovieUseCase } = useUseCases();
  const schema = type === MEDIA_TYPES.GAME ? gameSchema : movieSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    defaultValues: getInitialData(type),
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (initialData && isEditing) {
      Object.entries(initialData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [initialData, isEditing, setValue]);

  const onSubmitForm = async (data) => {
    try {
      if (type === MEDIA_TYPES.GAME) {
        await addGameUseCase.execute({
          title: data.title,
          status: data.status,
          platform: data.platform,
        });
      } else if (type === MEDIA_TYPES.MOVIE) {
        await addMovieUseCase.execute({
          title: data.title,
          status: data.status,
          director: data.director,
          releaseYear: Number(data.releaseYear),
          genre: data.genre,
        });
      }

      reset(getInitialData(type));
      onSubmit?.();
    } catch (error) {
      console.error("Form submission error:", error);
      throw error;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="space-y-4"
      noValidate
      role="form"
    >
      <div>
        <label className="block text-sm text-white mb-1mb-0.5"> Title *</label>
        <input
          type="text"
          {...register("title")}
          placeholder="Enter title..."
          className={`w-full p-2 border rounded ${
            errors.title ? "border-status-error" : "border-gray-300"
          }`}
          aria-label="Title"
          aria-invalid={errors.title ? "true" : "false"}
          autoFocus
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm text-white mb-0.5"> Status *</label>
        <select
          {...register("status")}
          className={`w-full p-2 border rounded ${
            errors.status ? "border-status-error" : "border-gray-300"
          }`}
          aria-label="Status"
          aria-invalid={errors.status ? "true" : "false"}
        >
          <option value="">Select status</option>
          <option value="in_backlog">In Backlog</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        {errors.status && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {errors.status.message}
          </p>
        )}
      </div>

      {type === MEDIA_TYPES.GAME && (
        <div>
          <label className="block text-sm text-whitemb-0.5"> Platform *</label>
          <select
            {...register("platform")}
            className={`w-full p-2 border rounded ${
              errors.platform ? "border-status-error" : "border-gray-300"
            }`}
            aria-label="Platform"
            aria-invalid={errors.platform ? "true" : "false"}
          >
            <option value="">Select Platform</option>
            <option value="PC">PC</option>
            <option value="XBOX">XBOX</option>
            <option value="PLAYSTATION_5">PS5</option>
          </select>
          {errors.platform && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              {errors.platform.message}
            </p>
          )}
        </div>
      )}

      {type === MEDIA_TYPES.MOVIE && (
        <>
          <div>
            <label className="block text-sm text-white mb-0.5">
              Director *
            </label>
            <input
              type="text"
              placeholder="Enter director's name..."
              {...register("director")}
              className={`w-full p-2 border rounded ${
                errors.director ? "border-status-error" : "border-gray-300"
              }`}
              aria-label="Director"
              aria-invalid={errors.director ? "true" : "false"}
            />
            {errors.director && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.director.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-white mb-0.5">
              Release year *
            </label>
            <input
              type="number"
              min={1888}
              max={new Date().getFullYear()}
              placeholder="Enter release year..."
              {...register("releaseYear")}
              className={`w-full p-2 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                errors.releaseYear ? "border-status-error" : "border-gray-300"
              }`}
              aria-label="Release Year"
              aria-invalid={errors.releaseYear ? "true" : "false"}
            />
            {errors.releaseYear && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.releaseYear.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-white mb-0.5"> Genre *</label>
            <input
              type="text"
              placeholder="Enter genre..."
              {...register("genre")}
              className={`w-full p-2 border rounded ${
                errors.genre ? "border-status-error" : "border-gray-300"
              }`}
              aria-label="Genre"
              aria-invalid={errors.genre ? "true" : "false"}
            />
            {errors.genre && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.genre.message}
              </p>
            )}
          </div>
        </>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-label="Submit"
        className="w-full py-2 bg-brand-primary text-white rounded hover:bg-brand-primary/80 disabled:bg-brand-primary/50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? <Loader /> : `${isEditing ? "Update" : "Add"} ${type}`}
      </button>
    </form>
  );
}

MediaForm.propTypes = {
  initialData: PropTypes.object,
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default MediaForm;
