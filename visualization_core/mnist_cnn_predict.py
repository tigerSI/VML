from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import numpy as np
import tensorflow as tf

from mnist_cnn_model import cnn_model_fn

tf.logging.set_verbosity(tf.logging.INFO)

def main(unused_argv):
  # Create the Estimator
  mnist_classifier = tf.estimator.Estimator(
      model_fn=cnn_model_fn, model_dir="mnist_model")

  # Predict the input
  


if __name__ == "__main__":
  tf.app.run()